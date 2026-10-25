# Bryan Boyd Website — Complete Revision 24 (October 25, 2026)

**Standalone complete project: no previous revisions or patches needed.**

## This revision
- Charles / Why I Joined ISTA video now uses a centered 16:9 player on desktop and mobile in all Display layouts.
- Statehouse protest photographs are emphasized in a prominent full-width lead and supporting photographs; event portraits are a smaller six-image horizontal gallery.
- Keeps all previous changes, including the definitive October 25 reel (v23 encodes), ISTA self-hosted films, and mobile improvements.

## Deploy
To deploy without a build step, use the separate `Bryan_Boyd_Ready_To_Deploy_Revision_24.zip`. Unzip it and push **its contents directly to your website repository root** so `index.html` is at the top level. In Vercel configure Framework Preset Other, no Build Command, and project root as the Output Directory (`.`), unless your project uses a different static-deployment setup.

For source editing, open this ZIP's `bryan-boyd-website` folder, edit `src/` and `public/`, run `npm run build` from that folder (Node.js required) and deploy the updated **contents of `dist/`**.

Do not upload both `src` and `dist` as your public web root.

## On-device checks after publishing
Play Charles Ward's testimonial on phone and desktop; swipe through the six portraits; play both original ISTA local films and the October 25 reel.
