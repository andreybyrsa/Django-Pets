# <div style="font-size: 35px; display: flex; align-items: center; gap: 20px;"><img src='https://static.djangoproject.com/img/logos/django-logo-negative.svg' height='60'/>**Django Pets**</div>

Django Pets project is a fullstack developed app with custom User Model, API for storing images and another Models with different relationship between them.

You can create an account or sign in, choose a habitat of your pet and just add it in a list of all pets!

There is some alghoritm inside an Index Page, which implementing pet's walking. It's like an extension for VS Code - [VS Code Pets](https://marketplace.visualstudio.com/items?itemName=tonybaloney.vscode-pets).

## Documentation

- [Introduction](##Django-Pets)
- [Build](##Build)
- [Docker](##Docker)
- [Libraries](##Libraries)

## Build

For correct project working you need to have a Python version: 3.9+. Here is a list of commands to build ptoject, just paste them in your terminal:

```
mkdir django-pets

cd django-pets
```

```
git pull https://github.com/andreybyrsa/Django-Pets.git
```

```
pip install -r requirements.txt

python manage.py runserver 3000
```
Server runs project on localhost:3000.

By default all migration commands and clean database without any Users and Pets objects were completed. But there are default Habitat objects, which need for good backend working.

### Your superuser account:

```
username: admin
password: 12345
```

## Docker

The project alredy has added in [Docker](https://hub.docker.com/repository/docker/andreybyrsa/django-pets-image/general). You need to install a [docker](https://hub.docker.com/repository/docker/andreybyrsa/django-pets-image/general) and paste the commands:


```
docker pull andreybyrsa/django-pets-image

docker run -p $PORT:8000 andreybyrsa/django-pets-image
```
Note: $PORT is a variable that you need to change - where you want to run server.

For using volumes just add:
```
docker run -p $PORT:8000 -v "YOUR_PATH_TO_PROJECT:/app" andreybyrsa/django-pets-image
```

## Libraries

```py
Django: 4.2.2

urllib3: 1.25.11

imagekitio: 3.0.1

Pillow: 9.5.0

Docker: 24.0.2

less: "https://cdn.jsdelivr.net/npm/less"
```