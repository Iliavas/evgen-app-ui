import React, {useEffect} from "react";

import {CKEditor} from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./css/editor.css"

export const Editor = (props) => {

    return <CKEditor
        className="editor"
        editor={ClassicEditor}
        data = {props.content}
        disabled = {true}
        config = {
            {
                toolbar: [],
                          removePlugins: ['Heading', 'Link'],
                isReadOnly: true,
            }
        }
        
    >
    </CKEditor>
}