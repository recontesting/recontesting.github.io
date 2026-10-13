/* ============================================================================
   Recon Clips — image manifest
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to change the images.

   • Drop your screenshots into the /images folder.
   • Add one line per image below.
   • `file` is the path inside /images (any of .png .jpg .jpeg .webp works).
   • `name` is the game name shown in the intro slideshow and the archive grid.
     If you leave `name` out, it is derived from the filename.

   Example:
     { file: "cs2-dust2.png", name: "Counter-Strike 2" },
     { file: "rust-wipe.jpg", name: "Rust" },

   You can add or remove as many as you like — the sphere, the intro and the
   grid all rebuild themselves from this list. 12–40 images looks best.
   ========================================================================== */

window.RECON_CLIPS = {
  images: [
    { file: "intro1.png",      name: "Recon Clips" },
    { file: "intro2.jpg",      name: "Recon Clips" },
    { file: "cs.png",          name: "Counter-Strike 2" },
    { file: "fn.png",          name: "Fortnite" },
    { file: "valorant.png",    name: "VALORANT" },
    { file: "apex.png",        name: "Apex Legends" },
    { file: "callofduty.png",  name: "Call of Duty" },
    { file: "pubg.png",        name: "PUBG: Battlegrounds" },
    { file: "rainbowsix.png",  name: "Rainbow Six Siege" },
    { file: "tarkov.png",      name: "Escape from Tarkov" },
    { file: "thefinals.png",   name: "The Finals" },
    { file: "ov.png",          name: "Overwatch 2" },
    { file: "mc.png",          name: "Minecraft" },
    { file: "haloinf.png",     name: "Halo Infinite" },
    { file: "tf2.png",         name: "Team Fortress 2" },
    { file: "perfecthunt.png", name: "Perfect Hunt" }
  ]
};
