from django import template

register = template.Library()


@register.filter
def message_check(take_message):
    try:
        if str(take_message.tags) == "warning":
            return True
        else:
            return False
    except Exception as e:
        print(e)
