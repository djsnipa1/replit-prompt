{ pkgs }: {
  deps = [
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.yarn
    pkgs.nodejs-16_x
    pkgs.neovim
    pkgs.figlet
    pkgs.lolcat
    pkgs.toilet
    pkgs.lf
    pkgs.bat
    pkgs.less
    pkgs.more
    pkgs.tmux
    pkgs.delta
    pkgs.fish
    pkgs.jq
    pkgs.delta
    pkgs.gibo
    pkgs.git-ignore
    pkgs.yarn
    pkgs.yarn-bash-completion

    pkgs.python310Packages.pip
    pkgs.python310Packages.pynvim
    pkgs.python310Packages.pygments
    pkgs.python310
    pkgs.asciiquarium
    pkgs.mdcat
    pkgs.tmux
    pkgs.gh
    ];
}
