import React, { useRef } from "react";

export default function CustomTextEditor() {
  const editorRef = useRef(null);

  // Apply formatting command
  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  // Handle list operations with modern approach
  const handleListCommand = (listType) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    
    // Find the closest list item or paragraph
    let listItem = container.nodeType === Node.TEXT_NODE ? container.parentElement : container;
    
    // Walk up the DOM tree to find the appropriate container
    while (listItem && !['LI', 'P', 'DIV'].includes(listItem.tagName)) {
      listItem = listItem.parentElement;
    }

    if (!listItem) return;

    // Check if we're already in a list
    const currentList = listItem.closest('ul, ol');
    
    if (currentList) {
      // If we're in a list of the same type, remove the list
      if ((listType === 'ul' && currentList.tagName === 'UL') || 
          (listType === 'ol' && currentList.tagName === 'OL')) {
        // Convert list items back to paragraphs
        const listItems = currentList.querySelectorAll('li');
        listItems.forEach(li => {
          const p = document.createElement('p');
          p.innerHTML = li.innerHTML;
          currentList.parentNode.insertBefore(p, currentList);
        });
        currentList.remove();
      } else {
        // Convert to the other list type
        const newList = document.createElement(listType);
        const listItems = currentList.querySelectorAll('li');
        listItems.forEach(li => {
          const newLi = document.createElement('li');
          newLi.innerHTML = li.innerHTML;
          newList.appendChild(newLi);
        });
        currentList.parentNode.replaceChild(newList, currentList);
      }
    } else {
      // Create new list
      const newList = document.createElement(listType);
      const newLi = document.createElement('li');
      
      // If the current element is a paragraph, move its content
      if (listItem.tagName === 'P') {
        newLi.innerHTML = listItem.innerHTML;
        listItem.parentNode.replaceChild(newList, listItem);
      } else {
        // Create a new list item with the selected content
        if (selection.toString()) {
          newLi.textContent = selection.toString();
          selection.deleteFromDocument();
        } else {
          newLi.innerHTML = '&nbsp;'; // Empty list item
        }
        range.deleteContents();
        range.insertNode(newList);
      }
      
      newList.appendChild(newLi);
      
      // Position cursor in the new list item
      const newRange = document.createRange();
      newRange.setStart(newLi, 0);
      newRange.collapse(true);
      selection.removeAllRanges();
      selection.addRange(newRange);
    }
    
    editorRef.current.focus();
  };

 

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-white-500 shadow-lg rounded-2xl">
      <style jsx>{`
        .editor-content ul, .editor-content ol {
          margin: 1em 0;
          padding-left: 2em;
        }
        .editor-content ul {
          list-style-type: disc;
        }
        .editor-content ol {
          list-style-type: decimal;
        }
        .editor-content li {
          margin: 0.5em 0;
        }
      `}</style>
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-4 p-2 bg-gray-100 rounded-lg">
        {/* Font Family */}
        <select
          onChange={(e) => handleCommand("fontName", e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
        </select>

        {/* Font Size */}
        <select
          onChange={(e) => handleCommand("fontSize", e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="3">Normal</option>
          <option value="1">Small</option>
          <option value="5">Large</option>
          <option value="7">Huge</option>
        </select>

        {/* Text Format */}
        <button
          onClick={() => handleCommand("bold")}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold">B</button>
       
        <button
          onClick={() => handleCommand("italic")}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 italic">I</button>

        <button
          onClick={() => handleCommand("underline")}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 underline">U</button>
        
        <button
          onClick={() => handleCommand("strikeThrough")}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 line-through"> S</button>

        {/* Alignment */}
        <select
          onChange={(e) => handleCommand(e.target.value)}
          className="border rounded px-2 py-1">

          <option value="">Align</option>
          <option value="justifyLeft">Left</option>
          <option value="justifyCenter">Center</option>
          <option value="justifyRight">Right</option>
          <option value="justifyFull">Justify</option>
        </select>

        {/* Lists */}
        <button
          onClick={() => handleListCommand("ul")}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" > • Bullet </button>
        
        
        <button
          onClick={() => handleListCommand("ol")}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"> 1. Number </button>

        {/* Text Color */}
        <input
          type="color"
          onChange={(e) => handleCommand("foreColor", e.target.value)}
          className="w-8 h-8 border rounded"/>

        {/* Highlight Color */}
        <input
          type="color"
          onChange={(e) => handleCommand("hiliteColor", e.target.value)}
          className="w-8 h-8 border rounded"
        />
      </div>

      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning={true}
        className="min-h-[500px] p-4 border rounded-lg editor-content"
      ></div>
    </div>
  );
}