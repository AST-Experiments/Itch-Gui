/* generated by pull.js */
const manifest = {
  "editorOnly": true,
  "noTranslations": true,
  "name": "Automatically add extensions",
  "description": "Auto-shows music, pen, and other extensions in the block category menu in the editor.",
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "settings": [
    {
      "name": "Music",
      "id": "music",
      "type": "boolean",
      "default": true
    },
    {
      "name": "Pen",
      "id": "pen",
      "type": "boolean",
      "default": true
    },
    {
      "name": "Text to Speech",
      "id": "text2speech",
      "type": "boolean",
      "default": false
    },
    {
      "name": "Translate",
      "id": "translate",
      "type": "boolean",
      "default": false
    }
  ],
  "tags": []
};
export default manifest;
