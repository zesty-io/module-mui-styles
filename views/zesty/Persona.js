/**
  * Zesty.io Content Model Component
  * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
  *
  * Label: Personas
  * Name: personas
  * Model ZUID: 6-e49398f6ef-p9fm2v
  * File Created On: Thu Feb 23 2023 22:18:08 GMT+0800 (Singapore Standard Time)
  *
  * Model Fields:
  *
   * name (text)
 * default_avatar (images)
  *
  * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
  * images are objects {content.image_name.data[0].url}
  *
  * This file is expected to be customized; because of that, it is not overwritten by the integration script.
  * Model and field changes in Zesty.io will not be reflected in this comment.
  *
  * View and Edit this model's current schema on Zesty.io at https://8-fcddf1dcee-30w9nz.manager.zesty.io/schema/6-e49398f6ef-p9fm2v
  *
  * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
  * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
  */
 
 import React  from 'react';
 
 function Persona({ content }) {
     return (
         <>
             {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
             <h1 dangerouslySetInnerHTML={{__html:content.meta.web.seo_meta_title}}></h1>
             <div>{content.meta.web.seo_meta_description}</div>
             {/* End of Zesty.io output example */}
         </>
     );
 }
 
 export default Persona;
 