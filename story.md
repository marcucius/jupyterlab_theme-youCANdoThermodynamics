---
title: "develop new jupyterlab theme"
output: 
  pdf_document:
    latex_engine: xelatex
header-includes:
 - \usepackage{fvextra}
 - \DefineVerbatimEnvironment{Highlighting}{Verbatim}{breaklines,commandchars=\\\{\}}
---


1. create conda dev envirnoment 

    ```{.sh .numberLines}
    conda create -n jupyterlab-ext --override-channels --strict-channel-priority -c conda-forge -c anaconda jupyterlab cookiecutter nodejs git
    ```

1. nav to parent directory for new theme

    ```{.zsh .numberLines}
    conda activate jupyterlab-ext
    ```

    ```{.zsh .numberLines}
    cookiecutter https://github.com/jupyterlab/theme-cookiecutter
    ```
    
    ```{.zsh .numberLines}
    git init
    ```
    
    ```{.zsh .numberLines}
    git config user.name 
    git config user.email 

    git config user.name "marcucius"
    git config user.email "marcucius@icloud.com"
    ```
    
    ```{.zsh .numberLines}
    git remote -v

    git remote add origin git@github.com-marcucius:marcucius/jupyterlab_theme-youCAN.git

    git remote -v
    ```
    
    ```{.zsh .numberLines}
    git add .
    git commit -m "Initial commit"
    git push -u origin master
    ```


