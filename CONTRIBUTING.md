# Contributing to [Your Project Name]

Thank you for considering contributing to [django-boilerplate]! By contributing to this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can You Contribute?

### Reporting Bugs

If you encounter a bug, please use the GitHub issue tracker to report it. Before creating a new issue, make sure to check if the issue already exists. Provide as much detail as possible, including the steps to reproduce the bug.

### Suggesting Enhancements

If you have an idea for an enhancement, please open an issue on GitHub and label it as an enhancement. Describe your suggestion and provide any relevant details or examples.

### Code Contributions

We welcome contributions in the form of bug fixes, new features, or improvements to existing features. To contribute code, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and ensure that the code style is consistent.
4. Write tests for your changes if applicable.
5. Submit a pull request, explaining the purpose of your changes.

### Pull Request Guidelines

- Follow the style and coding standards used in the project.
- Ensure that your changes don't break existing functionality.
- Provide a clear and concise description of your pull request.
- If your pull request addresses an issue, reference the issue in the description using keywords like "Fixes #issue_number".

### Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report any unacceptable behavior.

## Development Setup

To set up a development environment, follow these steps:

1. Create a repository using this template or clone the repository
   ```
   git clone git@github.com:sajib1066/django-boilerplate.git
   ```
2. Create a virtual environment
   ```
   python -m venv venv
   ```
3. Activate the virtual environment
   ```
   source venv/bin/activate
   ```
4. Install modules
   ```
   pip install -r requirements.txt
   ```
5. Create local settings
   ```
   cp examples/local_settings.example django_boilerplate/local_settins.py
   ```
6. Create logs file
   ```
   mkdir logs
   ```
7. Rename project
   ```
   python manage.py renameproject django_boilerplate <your_project_name>
   ```
8. Migrate database
   ```
   python manage.py migrate
   ```
9. Create superuser
    ```
    python manage.py createsuperuser
    ```
10. Run the project
    ```
    python manage.py runserver
    ```

## Contact

If you have questions or need further assistance, feel free to contact the maintainers:

- Maintainer Name (MaintainerEmail@example.com)

Thank you for your contribution!
