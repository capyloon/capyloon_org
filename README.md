# capyloon_org-hugo

capyloon.org website refresh with hugo


# Install hugo

Just download latest version of [Hugo binary (> 0.25)](https://gohugo.io/getting-started/installing/) for your OS (Windows, Linux, Mac) : it’s that simple.

# Setup 
 The site has been built using [hugo](https://gohugo.io) and uses the `hugo-theme-learn` theme. After cloning the repository run the following command inside the cloned directory to ensure that the themes related files are available.
 
 `git submodule update --init --recursive`
 
# Run

Start the hugo server with
`hugo serve -w -D`
> `-w` flag instructs hugo watch filesystem for changes.
> `-D` flag instructs hugo to include content marked as draft.


# Adding new chapters

Adding a new chapter could be done with following syntax. The `_index.md` is the default index page inside the subfolders aka chapter.

`hugo new --kind chapter development/_index.md`

Additional information about content management could found on [hugo-theme-learn site](https://learn.netlify.app/en/cont/pages/).

# Style Customization

The site utilizes [Hugo-theme-learn](https://learn.netlify.app/en). The custom style is defined with `themeVariant` parameter.

For more information, consult [style customization](https://learn.netlify.app/en/basics/style-customization/) documentation.
