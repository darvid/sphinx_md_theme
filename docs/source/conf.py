# -*- coding: utf-8 -*-
import os
import sys

sys.path.insert(0, os.path.abspath('../../src'))

from sphinx_md_theme import __version__ as version


extensions = []
templates_path = ['_templates']
source_suffix = '.rst'
master_doc = 'index'

project = u'sphinx_md_theme'
copyright = u'2016, David Gidwani'
author = u'David Gidwani'
release = version
language = None
exclude_patterns = []
pygments_style = 'sphinx'
todo_include_todos = False
html_theme = 'material_design'
html_theme_options = {
    'pygments_theme': 'algol',
    'ribbon_bg': 'images/turqoise-adam-birkett.jpg',
    'ribbon_bg_position': 'left 70%',
}
html_static_path = ['_static']
htmlhelp_basename = 'sphinx_md_themedoc'
