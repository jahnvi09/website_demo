import React, { useState, useEffect, useRef } from 'react';

const toolbarButtonStyle = (active) => ({
    background: active ? '#d0e6fd' : '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    color: '#222',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '2px',
    transition: 'background 0.2s, border 0.2s'
});

const toolbarSelectStyle = {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '5px 8px',
    fontSize: '15px',
    background: '#fff',
    height: '32px'
};

const Notes = () => {
    const [saving, setSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const [formats, setFormats] = useState({
        bold: false,
        italic: false,
        underline: false
    });
    const editorRef = useRef(null);

    useEffect(() => {
        if (isTyping) {
            setSaving(true);
            const timer = setTimeout(() => {
                setSaving(false);
                setLastSaved(new Date());
                setIsTyping(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isTyping]);

    // Update format state on selection change
    useEffect(() => {
        const handler = () => {
            setFormats({
                bold: document.queryCommandState('bold'),
                italic: document.queryCommandState('italic'),
                underline: document.queryCommandState('underline')
            });
        };
        document.addEventListener('selectionchange', handler);
        return () => document.removeEventListener('selectionchange', handler);
    }, []);

    const handleInput = () => {
        setIsTyping(true);
    };

    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
        editorRef.current.focus();
        setFormats({
            bold: document.queryCommandState('bold'),
            italic: document.queryCommandState('italic'),
            underline: document.queryCommandState('underline')
        });
    };

    const saveNoteToFile = () => {
        const content = editorRef.current.innerHTML;
        const blob = new Blob([content], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'student_notes.html';
        link.click();
    };

    return (
        
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Notes</h1>

            {/* Professional One-Line Toolbar */}
            <div style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                background: '#f9f9f9',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                padding: '6px 12px',
                marginBottom: '14px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
            }}>
                <button
                    style={toolbarButtonStyle(formats.bold)}
                    onClick={() => execCommand('bold')}
                    title="Bold"
                    type="button"
                >
                    <span style={{ fontWeight: 'bold' }}>B</span>
                </button>
                <button
                    style={toolbarButtonStyle(formats.italic)}
                    onClick={() => execCommand('italic')}
                    title="Italic"
                    type="button"
                >
                    <span style={{ fontStyle: 'italic' }}>I</span>
                </button>
                <button
                    style={toolbarButtonStyle(formats.underline)}
                    onClick={() => execCommand('underline')}
                    title="Underline"
                    type="button"
                >
                    <span style={{ textDecoration: 'underline' }}>U</span>
                </button>

                <select style={toolbarSelectStyle} onChange={(e) => execCommand('fontName', e.target.value)} defaultValue="default">
                    <option disabled value="default">Font</option>
                    <option value="Arial">Arial</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                </select>

                <select style={toolbarSelectStyle} onChange={(e) => execCommand('fontSize', e.target.value)} defaultValue="default">
                    <option disabled value="default">Size</option>
                    <option value="1">Small</option>
                    <option value="3">Normal</option>
                    <option value="5">Large</option>
                    <option value="7">Huge</option>
                </select>

                {/* Color Picker with Paint Bucket Icon */}
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginLeft: '8px' }} title="Text Color">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        style={{ marginRight: '4px' }}
                    >
                        <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a3 3 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1 1 0 0 0-.004-.117c-.055-1.25-.7-..."/>
                    </svg>
                    <input
                        type="color"
                        style={{
                            border: 'none',
                            background: 'none',
                            width: '28px',
                            height: '28px',
                            cursor: 'pointer',
                            padding: 0,
                            margin: 0
                        }}
                        onChange={(e) => execCommand('foreColor', e.target.value)}
                        aria-label="Choose text color"
                    />
                </label>
            </div>

            {/* Editable Area */}
                    <div
                        ref={editorRef}
                        className="notes-editor"
                        contentEditable
                        onInput={handleInput}
                        style={{
                            border: '1px solid #ccc',
                            padding: '12px',
                            minHeight: '200px',
                            borderRadius: '6px',
                            outline: 'none'
                        }}
                        />



            <div style={{ marginTop: '10px' }}>
                {saving && <p style={{ color: 'green' }}>Autosaving...</p>}
                {!saving && lastSaved && (
                    <p style={{ color: 'blue' }}>
                        Last saved at: {lastSaved.toLocaleTimeString()}
                    </p>
                )}
          <button onClick={saveNoteToFile} style={{
    padding: '8px 16px',
    backgroundColor: '#1c8051', // <-- GREEN
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '8px'
}}>
    Save Notes
</button>

            </div>
        </div>
    );
};

export default Notes;
