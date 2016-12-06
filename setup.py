# -*- coding: utf-8 -*-
"""A Material design theme for Sphinx 1.3+.

Forked from sphinx_rtd_theme by Dave Snider.

"""
import sys

import setuptools


def setup():
    setup_requirements = ['six', 'setuptools>=17.1', 'setuptools_scm']
    needs_sphinx = {
        'build_sphinx',
        'docs',
        'upload_docs',
    }.intersection(sys.argv)
    if needs_sphinx:
        setup_requirements.append('sphinx')
    setuptools.setup(
        author='David Gidwani',
        author_email='david.gidwani@gmail.com',
        classifiers=[
            'Development Status :: 3 - Alpha',
            'License :: OSI Approved :: BSD License',
            'Environment :: Console',
            'Environment :: Web Environment',
            'Intended Audience :: Developers',
            'Programming Language :: Python :: 2.7',
            'Programming Language :: Python :: 3',
            'Operating System :: OS Independent',
            'Topic :: Documentation',
            'Topic :: Software Development :: Documentation',
        ],
        description='A Material design theme for Sphinx.',
        entry_points={
            'sphinx_themes': [
                'material_design = sphinx_md_theme:template_path',
            ],
        },
        include_package_data=True,
        license='MIT',
        long_description=open('README.rst').read(),
        name='sphinx_md_theme',
        package_data={
            'sphinx_md_theme': [
                'theme.conf',
                'templates/*.html',
                'static/css/*.css',
                'static/js/*.js',
                'static/font/*.*'
            ],
        },
        package_dir={'': 'src'},
        packages=setuptools.find_packages('./src'),
        setup_requires=setup_requirements,
        url='https://github.com/darvid/sphinx_md_theme',
        use_scm_version=True,
        zip_safe=False,
    )


if __name__ == '__main__':
    setup()
