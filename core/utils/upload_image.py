import os
import base64

from imagekitio import ImageKit
from imagekitio.models.UploadFileRequestOptions import UploadFileRequestOptions

from ..settings import BASE_DIR


image_kit = ImageKit(
    private_key=os.getenv('IMAGE_KIT_PRIVATE_KEY'),
    public_key=os.getenv('IMAGE_KIT_PUBLIC_KEY'),
    url_endpoint=os.getenv('IMAGE_KIT_URL_ENDPOINT'),
)


def upload_image(file: str, user_id: str) -> str:
    image_path = os.path.join(BASE_DIR, f"apps/auth/static/auth/images/{file}")
    image_name = f"{user_id}_profile_picture.png"

    with open(image_path, "wb+") as destination:
        for chunk in file.chunks():
            destination.write(chunk)

    with open(image_path, mode="rb") as img:
        image_file = base64.b64encode(img.read())

    uploaded_image = (
        image_kit.upload(
            file=image_file,
            file_name=image_name,
            options=UploadFileRequestOptions(
                overwrite_file=False,
            ),
        ),
    )

    os.remove(image_path)

    current_image_url = uploaded_image[0].response_metadata.raw["url"]

    return current_image_url
