from django import forms


class RegisterForm(forms.Form):
    """ Custom login form """
    name = forms.CharField(
        label="Name",
        max_length=255,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'name': 'name',
            'id': 'name',
            'placeholder': 'Name',
            'autofocus': True,
        })
    )
    email = forms.CharField(
        label="Email",
        max_length=255,
        widget=forms.EmailInput(attrs={
            'class': 'form-control',
            'name': 'email',
            'id': 'email',
            'placeholder': 'Enter your email',
            'autofocus': True,
        })
    )
    password = forms.CharField(
        label="Password",
        max_length=30,
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'name': 'password',
            'id': 'password',
            'placeholder': '*******',
        })
    )
    confirm_password = forms.CharField(
        label="Confirm Password",
        max_length=30,
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'name': 'confirm_password',
            'id': 'confirm_password',
            'placeholder': '*******',
        })
    )
