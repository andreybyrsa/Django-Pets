from datetime import datetime


def get_current_time() -> str:
    time = int(str(datetime.now().time())[:2]) + 5

    if (time >= 6 and time <= 12):
        time = "Доброе утро"
    elif (time > 12 and time <= 18):
        time = "Добрый день"
    elif (time > 18 and time < 24):
        time = "Добрый вечер"
    else:
        time = "Доброй ночи"

    return time
