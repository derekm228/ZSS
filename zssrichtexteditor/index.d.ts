
declare class ZSSBarButtonItem extends UIBarButtonItem {

   static alloc(): ZSSBarButtonItem; // inherited from NSObject

   static new(): ZSSBarButtonItem; // inherited from NSObject

   delegate: any;

   label: NSString;

}

declare class ZSSColorViewController extends ZSSRichTextEditor {

   static alloc(): ZSSColorViewController; // inherited from NSObject

   static new(): ZSSColorViewController; // inherited from NSObject

   delegate: any;

}

declare class ZSSCustomButtonsViewController extends ZSSRichTextEditor {

   static alloc(): ZSSCustomButtonsViewController; // inherited from NSObject

   static new(): ZSSCustomButtonsViewController; // inherited from NSObject

   delegate: any;

}

declare class ZSSLargeViewController extends ZSSRichTextEditor {

   static alloc(): ZSSLargeViewController; // inherited from NSObject

   static new(): ZSSLargeViewController; // inherited from NSObject

   delegate: any;

}

declare class ZSSPlaceholderViewController extends ZSSRichTextEditor {

   static alloc(): ZSSPlaceholderViewController; // inherited from NSObject

   static new(): ZSSPlaceholderViewController; // inherited from NSObject

   delegate: any;

}

export declare class ZSSRichTextEditor extends UIViewController implements UIWebViewDelegate, HRColorPickerViewControllerDelegate, UITextViewDelegate {

   static alloc(): ZSSRichTextEditor; // inherited from NSObject

   static new(): ZSSRichTextEditor; // inherited from NSObject

   delegate: any;

   readonly ZSSRichTextEditorToolbarBold: typeof NSString;
   readonly ZSSRichTextEditorToolbarItalic: typeof NSString;
   readonly ZSSRichTextEditorToolbarSubscript: typeof NSString;
   readonly ZSSRichTextEditorToolbarSuperscript: typeof NSString;
   readonly ZSSRichTextEditorToolbarStrikeThrough: typeof NSString;
   readonly ZSSRichTextEditorToolbarUnderline: typeof NSString;
   readonly ZSSRichTextEditorToolbarRemoveFormat: typeof NSString;
   readonly ZSSRichTextEditorToolbarJustifyLeft: typeof NSString;
   readonly ZSSRichTextEditorToolbarJustifyCenter: typeof NSString;
   readonly ZSSRichTextEditorToolbarJustifyRight: typeof NSString;
   readonly ZSSRichTextEditorToolbarJustifyFull: typeof NSString;
   readonly ZSSRichTextEditorToolbarH1: typeof NSString;
   readonly ZSSRichTextEditorToolbarH2: typeof NSString;
   readonly ZSSRichTextEditorToolbarH3: typeof NSString;
   readonly ZSSRichTextEditorToolbarH4: typeof NSString;
   readonly ZSSRichTextEditorToolbarH5: typeof NSString;
   readonly ZSSRichTextEditorToolbarH6: typeof NSString;
   readonly ZSSRichTextEditorToolbarTextColor: typeof NSString;
   readonly ZSSRichTextEditorToolbarBackgroundColor: typeof NSString;
   readonly ZSSRichTextEditorToolbarUnorderedList: typeof NSString;
   readonly ZSSRichTextEditorToolbarOrderedList: typeof NSString;
   readonly ZSSRichTextEditorToolbarHorizontalRule: typeof NSString;
   readonly ZSSRichTextEditorToolbarIndent: typeof NSString;
   readonly ZSSRichTextEditorToolbarOutdent: typeof NSString;
   readonly ZSSRichTextEditorToolbarInsertImage: typeof NSString;
   readonly ZSSRichTextEditorToolbarInsertLink: typeof NSString;
   readonly ZSSRichTextEditorToolbarRemoveLink: typeof NSString;
   readonly ZSSRichTextEditorToolbarQuickLink: typeof NSString;
   readonly ZSSRichTextEditorToolbarUndo: typeof NSString;
   readonly ZSSRichTextEditorToolbarRedo: typeof NSString;
   readonly ZSSRichTextEditorToolbarViewSource: typeof NSString;
   readonly ZSSRichTextEditorToolbarParagraph: typeof NSString;
   readonly ZSSRichTextEditorToolbarAll: typeof NSString;
   readonly ZSSRichTextEditorToolbarNone: typeof NSString;

   constructor() {
      super();
      this.ZSSRichTextEditorToolbarBold = "com.zedsaid.toolbaritem.bold";
      this.ZSSRichTextEditorToolbarItalic = "com.zedsaid.toolbaritem.italic";
      this.ZSSRichTextEditorToolbarSubscript = "com.zedsaid.toolbaritem.subscript";
      this.ZSSRichTextEditorToolbarSuperscript = "com.zedsaid.toolbaritem.superscript";
      this.ZSSRichTextEditorToolbarStrikeThrough = "com.zedsaid.toolbaritem.strikeThrough";
      this.ZSSRichTextEditorToolbarUnderline = "com.zedsaid.toolbaritem.underline";
      this.ZSSRichTextEditorToolbarRemoveFormat = "com.zedsaid.toolbaritem.removeFormat";
      this.ZSSRichTextEditorToolbarJustifyLeft = "com.zedsaid.toolbaritem.justifyLeft";
      this.ZSSRichTextEditorToolbarJustifyCenter = "com.zedsaid.toolbaritem.justifyCenter";
      this.ZSSRichTextEditorToolbarJustifyRight = "com.zedsaid.toolbaritem.justifyRight";
      this.ZSSRichTextEditorToolbarJustifyFull = "com.zedsaid.toolbaritem.justifyFull";
      this.ZSSRichTextEditorToolbarH1 = "com.zedsaid.toolbaritem.h1";
      this.ZSSRichTextEditorToolbarH2 = "com.zedsaid.toolbaritem.h2";
      this.ZSSRichTextEditorToolbarH3 = "com.zedsaid.toolbaritem.h3";
      this.ZSSRichTextEditorToolbarH4 = "com.zedsaid.toolbaritem.h4";
      this.ZSSRichTextEditorToolbarH5 = "com.zedsaid.toolbaritem.h5";
      this.ZSSRichTextEditorToolbarH6 = "com.zedsaid.toolbaritem.h6";
      this.ZSSRichTextEditorToolbarTextColor = "com.zedsaid.toolbaritem.textColor";
      this.ZSSRichTextEditorToolbarBackgroundColor = "com.zedsaid.toolbaritem.backgroundColor";
      this.ZSSRichTextEditorToolbarUnorderedList = "com.zedsaid.toolbaritem.unorderedList";
      this.ZSSRichTextEditorToolbarOrderedList = "com.zedsaid.toolbaritem.orderedList";
      this.ZSSRichTextEditorToolbarHorizontalRule = "com.zedsaid.toolbaritem.horizontalRule";
      this.ZSSRichTextEditorToolbarIndent = "com.zedsaid.toolbaritem.indent";
      this.ZSSRichTextEditorToolbarOutdent = "com.zedsaid.toolbaritem.outdent";
      this.ZSSRichTextEditorToolbarInsertImage = "com.zedsaid.toolbaritem.insertImage";
      this.ZSSRichTextEditorToolbarInsertLink = "com.zedsaid.toolbaritem.insertLink";
      this.ZSSRichTextEditorToolbarRemoveLink = "com.zedsaid.toolbaritem.removeLink";
      this.ZSSRichTextEditorToolbarQuickLink = "com.zedsaid.toolbaritem.quickLink";
      this.ZSSRichTextEditorToolbarUndo = "com.zedsaid.toolbaritem.undo";
      this.ZSSRichTextEditorToolbarRedo = "com.zedsaid.toolbaritem.redo";
      this.ZSSRichTextEditorToolbarViewSource = "com.zedsaid.toolbaritem.viewSource";
      this.ZSSRichTextEditorToolbarParagraph = "com.zedsaid.toolbaritem.paragraph";
      this.ZSSRichTextEditorToolbarAll = "com.zedsaid.toolbaritem.all";
      this.ZSSRichTextEditorToolbarNone = "com.zedsaid.toolbaritem.none";
   };

   /**
    *  The base URL to use for the webView
    */
   baseURL: NSURL;

   /**
    *  If the HTML should be formatted to be pretty
    */
   formatHTML: bool;

   /**
    *  If the keyboard should be shown when the editor loads
    */
   shouldShowKeyboard: bool;

   /**
    *  The placeholder text to use if there is no editor content
    */
   placeholder: NSString;

   /**
    *  Toolbar items to include
    */
   enabledToolbarItems: NSArray;

   /**
    *  Color to tint the toolbar items
    */
   toolbarItemTintColor: UIColor;

   /**
    *  Color to tint selected items
    */
   toolbarItemSelectedTintColor: UIColor;

   addTextFieldView(textFieldView: UIView): void;

   initWithViewController(controller: UIViewController): this;

   removeResponderFromView(view: UIView): void;

   removeTextFieldView(textFieldView: UIView): void;

   /**
    *  Sets the HTML for the entire editor
    *
    *  html = HTML string to set for the editor
    *
    */
   setHTML(html: NSString): void;

   /**
    *  Returns the HTML from the Rich Text Editor
    *
    */
   getHTML(): NSString;

   /**
    *  Returns the plain text from the Rich Text Editor
    *
    */
   getText(): NSString;

   /**
    *  Inserts HTML at the caret position
    *
    *  html = HTML string to insert
    *
    */
   insertHTML(html: NSString): void;

   /**
    *  Manually focuses on the text editor
    */
   focusTextEditor(): void;

   /**
    *  Manually dismisses on the text editor
    */
   blurTextEditor(): void;

   /**
    *  Shows the insert image dialog with optinal inputs
    *
    *   url = The URL for the image
    *   alt = The alt for the image
    */
   showInsertImageDialogWithLink(url: NSString, alt: NSString): void;

   /**
    *  Inserts an image
    *
    *   url = The URL for the image
    *   alt = The alt attribute for the image
    */
   insertImage(url: NSString, alt: NSString): void;

   /**
    *  Shows the insert link dialog with optional inputs
    *
    *  url = The URL for the link
    *  title = The tile for the link
    */
   showInsertLinkDialogWithLink(url: NSString, title: NSString): void;

   /**
    *  Inserts a link
    *
    *  url =  The URL for the link
    *  title = The title for the link
    */
   insertLink(url: NSString, title: NSString): void;

   /**
    *  Gets called when the insert URL picker button is tapped in an alertView
    *
    *  @warning The default implementation of this method is blank and does nothing
    */
   showInsertURLAlternatePicker(): void;

   /**
    *  Gets called when the insert Image picker button is tapped in an alertView
    *
    *  @warning The default implementation of this method is blank and does nothing
    */
   showInsertImageAlternatePicker(): void;

   /**
    *  Dismisses the current AlertView
    */
   dismissAlertView(): void;

   /**
    *  Add a custom UIBarButtonItem by using a UIButton
    */
   addCustomToolbarItemWithButton(button: UIButton): void;

   /**
    *  Add a custom ZSSBarButtonItem
    */
   addCustomToolbarItem(item: ZSSBarButtonItem): void;

   /**
    *  Scroll event callback with position
    */
   editorDidScrollWithPosition(position: NSInteger): void;
}

declare class ZSSSelectiveViewController extends ZSSRichTextEditor {

   static alloc(): ZSSSelectiveViewController; // inherited from NSObject

   static new(): ZSSSelectiveViewController; // inherited from NSObject

   delegate: any;

}

declare class ZSSTextView extends CYRTextView {

   static alloc(): ZSSTextView; // inherited from NSObject

   static new(): ZSSTextView; // inherited from NSObject

   delegate: any;

   defaultFont: UIFont;
   boldFont: UIFont;
   italicFont: UIFont;

}
