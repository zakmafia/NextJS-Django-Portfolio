import pytest
from django.core.exceptions import ValidationError
from django.utils.text import slugify
from .models import Project

@pytest.mark.django_db
def test_project_creation():
    """
    Test to verify that a Project instance can be created successfully with all fields populated.
    """
    project = Project.objects.create(
        title='Test Project',
        description='A test project description',
        technologies='Django, Python',
        repository_url='https://github.com/test/repo',
        live_url='https://testproject.com'
    )
    assert project.title == 'Test Project'
    assert project.description == 'A test project description'
    assert project.technologies == 'Django, Python'
    assert project.repository_url == 'https://github.com/test/repo'
    assert project.live_url == 'https://testproject.com'
    assert project.slug == slugify('Test Project')

@pytest.mark.django_db
def test_slug_generation():
    """
    Test to verify that a slug is automatically generated from the Project title.
    """
    project = Project.objects.create(
        title='Another Test Project',
        description='Another test project description',
        technologies='Django, Python'
    )
    assert project.slug == 'another-test-project'

@pytest.mark.django_db
def test_string_representation():
    """
    Test to verify the string representation of a Project instance.
    """
    project = Project.objects.create(
        title='String Representation Test',
        description='Testing string representation',
        technologies='Django, Python'
    )
    assert str(project) == 'String Representation Test'

@pytest.mark.django_db
def test_unique_title_constraint():
    """
    Test to verify that the title field in the Project model is unique.
    """
    Project.objects.create(
        title='Unique Title',
        description='First instance of unique title',
        technologies='Django, Python'
    )
    with pytest.raises(ValidationError):
        project = Project(
            title='Unique Title',
            description='Second instance of unique title',
            technologies='Django, Python'
        )
        project.full_clean()  # This will raise the ValidationError

@pytest.mark.django_db
def test_optional_fields():
    """
    Test to verify that optional fields in Project can be omitted during creation.
    """
    project = Project.objects.create(
        title='Optional Fields Test',
        description='Testing optional fields',
        technologies='Django, Python'
    )
    assert project.repository_url == ''
    assert project.live_url == ''
    assert not project.image  # This checks for both None and empty file fields
