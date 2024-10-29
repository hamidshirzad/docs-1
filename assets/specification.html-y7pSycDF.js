import{_ as t,r as e,o,c as p,a as s,b as n,d as i,e as r}from"./app-wfQWMRoZ.js";const c={},l=s("h1",{id:"scene-builder-scene-specification",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#scene-builder-scene-specification","aria-hidden":"true"},"#"),n(" Scene Builder Scene Specification")],-1),u={href:"https://www.rfc-editor.org/rfc/rfc2119.txt",target:"_blank",rel:"noopener noreferrer"},d=r(`<h2 id="abstract" tabindex="-1"><a class="header-anchor" href="#abstract" aria-hidden="true">#</a> Abstract</h2><p>This documentation outlines the attributes and their descriptions for a Scene in the Scene Builder API response.</p><h2 id="restrictions" tabindex="-1"><a class="header-anchor" href="#restrictions" aria-hidden="true">#</a> Restrictions</h2><h3 id="folders" tabindex="-1"><a class="header-anchor" href="#folders" aria-hidden="true">#</a> Folders</h3><ul><li>Each scene MUST have exactly one folder with the <code>is_root_folder</code> attribute set to <code>true</code>.</li><li>Each folder MAY have multiple children with the <code>folderable_type</code> attribute set to <code>source</code>.</li><li>Only the root folder SHALL have children with the <code>folderable_type</code> attribute set to <code>folder</code>.</li><li>The resulting folder depth MUST NOT exceed two levels (root folder and children).</li></ul><h3 id="embedding-scenes" tabindex="-1"><a class="header-anchor" href="#embedding-scenes" aria-hidden="true">#</a> Embedding Scenes</h3><ul><li>Scenes SHOULD be embedded in your application using the <code>scene</code> source type.</li><li>Recursive embedding MUST be blocked to prevent infinite loops.</li><li>The maximum depth of embedding SHOULD be limited to three levels.</li></ul><h2 id="scene-attributes" tabindex="-1"><a class="header-anchor" href="#scene-attributes" aria-hidden="true">#</a> Scene Attributes</h2><table><thead><tr><th>Attribute</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique identifier for the scene.</td></tr><tr><td>owner_id</td><td>String</td><td>Identifier of the owner of the scene.</td></tr><tr><td>favourite</td><td>Boolean</td><td>Indicates whether the scene is marked as a favorite.</td></tr><tr><td>parent_collection_id</td><td>String</td><td>Identifier of the parent collection, if any.</td></tr><tr><td>name</td><td>String</td><td>Name of the scene.</td></tr><tr><td>canvas</td><td>Object</td><td>Specifications of the canvas (width and height).</td></tr><tr><td>layers</td><td>Array</td><td>Array of layer objects containing id and name.</td></tr><tr><td>created_at</td><td>String</td><td>Timestamp indicating when the scene was created.</td></tr><tr><td>updated_at</td><td>String</td><td>Timestamp indicating when the scene was last updated.</td></tr><tr><td>deleted_at</td><td>String</td><td>Timestamp indicating when the scene was deleted, if at all.</td></tr><tr><td>thumbnail_url</td><td>String</td><td>URL of the thumbnail image for the scene.</td></tr><tr><td>restrictions</td><td>Object</td><td>Restrictions applied to the scene (watermark, subscription, exclusive content).</td></tr><tr><td>folders</td><td>Object</td><td>Specifications of the folders within the scene.</td></tr><tr><td>sources</td><td>Object</td><td>Specifications of the sources within the scene.</td></tr></tbody></table><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example:</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9a8e3a6d-b8c3-4ce8-ac2e-ec63aaec8eeb&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;owner_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;favourite&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;parent_collection_id&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;New Scene&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;canvas&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1920</span><span class="token punctuation">,</span>
    <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1080</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;layers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foreground&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Foreground&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;background&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Background&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-11-07T11:29:23.000000Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;updated_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2024-03-28T09:30:23.000000Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;deleted_at&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;thumbnail_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://assets.cdn.own3d.tv/production/pro/scene-editor-scenes/9a8e3a6d-b8c3-4ce8-ac2e-ec63aaec8eeb/thumbnail_X3tArU8Z.jpeg&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;restrictions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;free_user_watermark&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pro_subscription_required&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;exclusive_content_required&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;folders&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sources&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="canvas-attributes" tabindex="-1"><a class="header-anchor" href="#canvas-attributes" aria-hidden="true">#</a> Canvas Attributes</h2><table><thead><tr><th>Attribute</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>width</td><td>Integer</td><td>Width of the canvas.</td></tr><tr><td>height</td><td>Integer</td><td>Height of the canvas.</td></tr></tbody></table><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example:</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;canvas&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1920</span><span class="token punctuation">,</span>
<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1080</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layer-attributes" tabindex="-1"><a class="header-anchor" href="#layer-attributes" aria-hidden="true">#</a> Layer Attributes</h2><table><thead><tr><th>Attribute</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique identifier for the layer.</td></tr><tr><td>name</td><td>String</td><td>Name of the layer.</td></tr></tbody></table><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example:</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;layers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foreground&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Foreground&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;background&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Background&quot;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="folder-children-attributes" tabindex="-1"><a class="header-anchor" href="#folder-children-attributes" aria-hidden="true">#</a> Folder Children Attributes</h2><p>Each folder children contains the following attributes:</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>layer_id</td><td>String</td><td>Identifier of the associated layer.</td></tr><tr><td>folderable_type</td><td>String</td><td>Type of folderable item (source, etc.).</td></tr><tr><td>folderable_id</td><td>String</td><td>Identifier of the folderable item.</td></tr><tr><td>position</td><td>Object</td><td>Position specifications (x and y).</td></tr><tr><td>crop</td><td>Object</td><td>Crop specifications.</td></tr><tr><td>rotation</td><td>Object</td><td>Rotation specifications (x, y, and z).</td></tr><tr><td>scale</td><td>Object</td><td>Scale specifications (x and y).</td></tr><tr><td>opacity</td><td>Integer</td><td>Opacity value.</td></tr><tr><td>options</td><td>Object</td><td>Additional options (locked, visible).</td></tr></tbody></table><h3 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example:</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;folders&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;9a8e3a6d-ba2d-466a-8a6a-2f3f94aec529&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Root&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;is_root_folder&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;layer_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foreground&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;folderable_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;source&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;folderable_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9ba47936-9df4-4ce0-a87a-7218782f0a78&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            ...
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;crop&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            ...
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            ...
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;scale&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            ...
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;effects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;glitch&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;blur&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gradient-border&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;blur&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;curved&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;blur&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;loop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token property">&quot;in&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fade-in&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;out&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fade-out&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;motions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shake&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;loop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pulse&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;loop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;opacity&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;locked&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source-attributes" tabindex="-1"><a class="header-anchor" href="#source-attributes" aria-hidden="true">#</a> Source Attributes</h2><p>Each source contains the following attributes:</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Name of the source.</td></tr><tr><td>type</td><td>String</td><td>Type of the source (text, extension, etc.).</td></tr><tr><td>version</td><td>Integer</td><td>Version of the source.</td></tr><tr><td>size</td><td>Object</td><td>Size specifications (width and height).</td></tr><tr><td>values</td><td>Object</td><td>Specific values depending on the type of source.</td></tr></tbody></table><h3 id="example-text-source" tabindex="-1"><a class="header-anchor" href="#example-text-source" aria-hidden="true">#</a> Example (Text Source):</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;9ba47936-9df4-4ce0-a87a-7218782f0a78&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text-Vyp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">856.1171228516869</span><span class="token punctuation">,</span>
      <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">137.3838319541693</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Upcoming Next&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;font-settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-extension-source" tabindex="-1"><a class="header-anchor" href="#example-extension-source" aria-hidden="true">#</a> Example (Extension Source):</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;9ba5dac8-8ad6-4aea-b04d-bd4c872d4c2a&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension-8AY&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1459.18196832799</span><span class="token punctuation">,</span>
      <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">727.2954140883276</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;days&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://45.146.252.122:4001/&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;extension&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;day-of-week&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tuesday&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;interactive&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;font-settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function k(v,b){const a=e("ExternalLinkIcon");return o(),p("div",null,[l,s("p",null,[n('The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and " OPTIONAL" in this document are to be interpreted as described in '),s("a",u,[n("RFC 2119"),i(a)]),n(".")]),d])}const m=t(c,[["render",k],["__file","specification.html.vue"]]);export{m as default};
