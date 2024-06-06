import pytest
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.utils.text import slugify
from django.utils import timezone
from .models import BlogPost, Category

@pytest.mark.django_db
def test_category_creation():
    """
    Test to verify that a Category instance can be created successfully.
    """
    category = Category.objects.create(name='Test Category')
    assert category.name == 'Test Category'
    assert category.slug == slugify('Test Category')

@pytest.mark.django_db
def test_blogpost_creation():
    """
    Test to verify that a BlogPost instance can be created successfully and linked to a Category.
    """
    user = User.objects.create_user(username='testuser', password='password')
    category = Category.objects.create(name='Test Category')
    blogpost = BlogPost.objects.create(
        title='Test Blog Post',
        content='This is a test blog post content.',
        author=user,
        status='published'
    )
    blogpost.categories.add(category)
    assert blogpost.title == 'Test Blog Post'
    assert blogpost.slug == slugify('Test Blog Post')
    assert blogpost.author == user
    assert blogpost.status == 'published'
    assert category in blogpost.categories.all()

@pytest.mark.django_db
def test_slug_generation_for_blogpost():
    """
    Test to verify that a slug is automatically generated from the BlogPost title.
    """
    user = User.objects.create_user(username='testuser', password='password')
    blogpost = BlogPost.objects.create(
        title='Another Test Blog Post',
        content='Another test blog post content.',
        author=user
    )
    assert blogpost.slug == 'another-test-blog-post'

@pytest.mark.django_db
def test_string_representation_for_category():
    """
    Test to verify the string representation of a Category instance.
    """
    category = Category.objects.create(name='Representation Test Category')
    assert str(category) == 'Representation Test Category'

@pytest.mark.django_db
def test_string_representation_for_blogpost():
    """
    Test to verify the string representation of a BlogPost instance.
    """
    user = User.objects.create_user(username='testuser', password='password')
    blogpost = BlogPost.objects.create(
        title='String Representation Test Blog Post',
        content='Testing string representation.',
        author=user
    )
    assert str(blogpost) == 'String Representation Test Blog Post'

@pytest.mark.django_db
def test_unique_category_constraint():
    """
    Test to verify that the name field in the Category model is unique.
    """
    Category.objects.create(name='Unique Category')
    with pytest.raises(ValidationError):
        category = Category(name='Unique Category')
        category.full_clean()  # This will raise the ValidationError

@pytest.mark.django_db
def test_unique_blogpost_title_constraint():
    """
    Test to verify that the title field in the BlogPost model is unique.
    """
    user = User.objects.create_user(username='testuser', password='password')
    BlogPost.objects.create(
        title='Unique Blog Post Title',
        content='Content for the unique title.',
        author=user
    )
    with pytest.raises(ValidationError):
        blogpost = BlogPost(
            title='Unique Blog Post Title',
            content='Another content for the same title.',
            author=user
        )
        blogpost.full_clean()  # This will raise the ValidationError

@pytest.mark.django_db
def test_optional_fields_in_blogpost():
    """
    Test to verify that optional fields in BlogPost can be omitted during creation.
    """
    user = User.objects.create_user(username='testuser', password='password')
    blogpost = BlogPost.objects.create(
        title='Optional Fields Test',
        content='Testing optional fields.',
        author=user
    )
    assert blogpost.published_date is not None
    assert blogpost.updated_date is not None
    assert blogpost.status == 'draft'
    assert not blogpost.image  # This checks for both None and empty file fields

@pytest.mark.django_db
def test_status_choices_in_blogpost():
    """
    Test to verify that the status field in BlogPost can be set to valid choices.
    """
    user = User.objects.create_user(username='testuser', password='password')
    blogpost = BlogPost.objects.create(
        title='Status Choices Test',
        content='Testing status choices.',
        author=user,
        status='draft'
    )
    assert blogpost.status == 'draft'
    blogpost.status = 'published'
    blogpost.save()
    assert blogpost.status == 'published'

@pytest.mark.django_db
def test_date_fields_in_blogpost():
    """
    Test to verify that date fields in BlogPost are correctly set during creation and update.
    """
    user = User.objects.create_user(username='testuser', password='password')
    now = timezone.now()
    blogpost = BlogPost.objects.create(
        title='Date Fields Test',
        content='Testing date fields.',
        author=user,
        published_date=now
    )
    assert blogpost.published_date == now
    assert blogpost.updated_date >= now
