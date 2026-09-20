#!/usr/bin/env python3
"""Assemble index.html from index.template.html + js/app.js.

The app's custom template runtime (js/dc-runtime.js) requires the component
script to be inline text in the document (it reads the <script> tag's
textContent and compiles it itself), so it can't be loaded via a normal
external <script src>. Edit css/app.css and js/app.js as the sources of
truth, then re-run this script to regenerate index.html.
"""
import pathlib

root = pathlib.Path(__file__).parent
template = (root / "index.template.html").read_text(encoding="utf-8")
app_js = (root / "js" / "app.js").read_text(encoding="utf-8")

output = template.replace("<!--APP_JS-->", "\n" + app_js)
(root / "index.html").write_text(output, encoding="utf-8")
print("wrote index.html")
