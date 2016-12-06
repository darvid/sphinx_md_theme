"""A Material design theme for Sphinx 1.3+.

Forked from sphinx_rtd_theme by Dave Snider.

"""
from __future__ import absolute_import

import os
import pkg_resources


try:
    __version__ = pkg_resources.get_distribution(__name__).version
except:  # noqa: B901
    __version__ = 'unknown'


package_dir = os.path.abspath(os.path.dirname(__file__))
template_path = os.path.join(package_dir, 'templates')


def get_path():
    """Return list of HTML theme paths."""
    return template_path
