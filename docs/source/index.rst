.. sphinx_md_theme documentation master file, created by
   sphinx-quickstart on Sun Dec  4 20:57:33 2016.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Sphinx Material Design Theme
============================

Introduction
------------

**sphinx_md_theme** is a MDL_-based theme originally based on Dave
Snider's Sphinx theme for Read the Docs (sphinx_rtd_theme_). This theme
has been tested on Sphinx 1.3+.

Installation
------------

.. code-block:: shell

   $ pip install sphinx_md_theme

Once installed, change **html_theme** in your ``conf.py`` to
**material_design**.

Configuration
-------------

* **pygments_theme**: The name of a Pygments style.
* **ribbon_bg**: Optional path to an image to display in the ribbon
  background.
* **ribbon_bg_position**: Defaults to ``auto auto``.
* **ribbon_bg_size**: Defaults to ``100% auto``.


.. _MDL: https://getmdl.io/started/
.. _sphinx_rtd_theme: https://github.com/snide/sphinx_rtd_theme
