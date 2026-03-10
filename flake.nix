{
  description = "Environnement de développement Angular";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils }:
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
          ];

          shellHook = ''
            # Ajoute les binaires locaux au PATH pour utiliser 'ng' directement après npm install
            export PATH="$PWD/node_modules/.bin:$PATH"
            
            echo ""
            echo "--- Environnement Angular Activé ---"
            echo "Node version: $(node -v)"
            echo "npm version:  $(npm -v)"
            echo ""
            echo "Pour initialiser un nouveau projet dans ce dossier :"
            echo "npx -p @angular/cli ng new nom-du-projet --directory ."
            echo ""
            echo "Une fois le projet créé, vous pourrez utiliser la commande 'ng' directement."
          '';
        };
      });
}
