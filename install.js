module.exports = async function ({ client, space, environment }) {
    const fields = [
        {
            id: 'title',
            name: 'title',
            type: 'Symbol',
            required: true,
            localized: false,
        },
        {
            "id": "text",
            "name": "text",
            "type": "RichText",
            "localized": false,
            "required": false,
            "validations": [
                {
                    "enabledMarks": [
                        "bold",
                        "italic",
                        "underline",
                        "code",
                        "superscript",
                        "subscript"
                    ],
                    "message": "Only bold, italic, underline, code, superscript, and subscript marks are allowed"
                },
                {
                    "enabledNodeTypes": [
                        "heading-1",
                        "heading-2",
                        "heading-3",
                        "heading-4",
                        "heading-5",
                        "heading-6",
                        "ordered-list",
                        "unordered-list",
                        "hr",
                        "blockquote",
                        "table",
                        "hyperlink"
                    ],
                    "message": "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, table, and link to Url nodes are allowed"
                },
                {
                    "nodes": {}
                }
            ],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "image",
            "name": "image",
            "type": "Link",
            "localized": false,
            "required": false,
            "validations": [
                {
                    "linkMimetypeGroup": [
                        "image"
                    ]
                }
            ],
            "disabled": false,
            "omitted": false,
            "linkType": "Asset"
        }
    ];

    const module = {
        name: 'Module: Stage',
        description: '',
        displayField: 'title',
        fields,
        sys: {
            id: 'moduleStage',
        }
    }

    const contentType = await environment.createContentTypeWithId('ModuleStage', module);
    await contentType.publish();
};