from django.contrib import admin
from django.utils.text import slugify
from .models import BlogPost, Category

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'published_date', 'status')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'content', 'author__username')
    list_filter = ('status', 'published_date', 'author')
    date_hierarchy = 'published_date'
    ordering = ('-published_date',)
    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'author', 'status')
        }),
        ('Content', {
            'fields': ('content',)
        }),
        ('Dates', {
            'fields': ('published_date', 'updated_date')
        }),
        ('Categories', {
            'fields': ('categories',)
        }),
        ('Image', {
            'fields': ('image',)
        }),
    )
    readonly_fields = ('published_date', 'updated_date')

    def save_model(self, request, obj, form, change):
        if not obj.slug:
            obj.slug = slugify(obj.title)
        super().save_model(request, obj, form, change)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)
    ordering = ('name',)
