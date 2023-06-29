import os

pets_images_root = "static/pet/images"


def get_current_pets(habitat: str) -> list:
    if habitat == "jungle":
        return [
            (os.path.join(pets_images_root, "jungleCat.webp"), "Кот"),
            (os.path.join(pets_images_root, "junglePanda.webp"), "Панда"),
            (os.path.join(pets_images_root, "jungleTiger.webp"), "Тигр"),
        ]

    if habitat == "ocean":
        return [
            (os.path.join(pets_images_root, "oceanFish1.webp"), "Рыбка1"),
            (os.path.join(pets_images_root, "oceanFish2.webp"), "Рыбка2"),
            (os.path.join(pets_images_root, "oceanTurtle.webp"), "Черепаха"),
        ]

    if habitat == "antarctica":
        return [
            (os.path.join(pets_images_root, "antarcticaBear.webp"), "Белый медведь"),
            (os.path.join(pets_images_root, "antarcticaPinguin.webp"), "Пингвин"),
            (os.path.join(pets_images_root, "antarcticaSquirrel.webp"), "Белка"),
        ]
