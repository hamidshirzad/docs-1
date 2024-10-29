import{_ as d,r as i,o as r,c as p,a,b as t,d as s,w as o,e}from"./app-wfQWMRoZ.js";const c="/assets/chrome_0dw2TFUmEj-C9exr1YU.png",l={},u=e('<h1 id="custom-commands" tabindex="-1"><a class="header-anchor" href="#custom-commands" aria-hidden="true">#</a> Custom Commands</h1><p><img src="'+c+`" alt="Create a OWN3D Pro Command"></p><p>This guide will help you create your own custom commands step by step. Don’t worry if you don’t have any coding experience — we’ll guide you through it.</p><h2 id="what-are-custom-commands" tabindex="-1"><a class="header-anchor" href="#what-are-custom-commands" aria-hidden="true">#</a> What Are Custom Commands?</h2><p>Custom commands allow you to make your bot do special things when someone types a command in chat. These commands can respond with text, get information about users, or even interact with data from other services.</p><h3 id="let-s-start-creating-a-simple-command" tabindex="-1"><a class="header-anchor" href="#let-s-start-creating-a-simple-command" aria-hidden="true">#</a> Let&#39;s Start: Creating a Simple Command</h3><p>To create your first custom command, follow these steps:</p><ol><li>Go to the OWN3D Pro Dashboard.</li><li>Click on the <strong>Commands</strong> section.</li><li>Click <strong>Add New Command</strong>.</li></ol><p>Now, let’s build a simple command together!</p><h3 id="example-make-the-bot-greet-the-chat" tabindex="-1"><a class="header-anchor" href="#example-make-the-bot-greet-the-chat" aria-hidden="true">#</a> Example: Make the Bot Greet the Chat</h3><p>You can make the bot respond with a message whenever someone types <code>!hello</code> in the chat.</p><ol><li><strong>Command:</strong> <code>!hello</code></li><li><strong>Response:</strong> <code>Hello everyone! Welcome to the stream!</code></li></ol><p>That’s it! The bot will now say this message whenever someone types <code>!hello</code>.</p><h2 id="advanced-custom-commands" tabindex="-1"><a class="header-anchor" href="#advanced-custom-commands" aria-hidden="true">#</a> Advanced Custom Commands</h2><p>If you want to make your commands more dynamic — like responding with a random message or getting information about the user who typed the command — you can use templates. This requires some basic coding using <strong>Twig</strong>, but don’t worry! We’ll explain everything step by step.</p><h3 id="what-are-templates" tabindex="-1"><a class="header-anchor" href="#what-are-templates" aria-hidden="true">#</a> What Are Templates?</h3><p>Templates are small pieces of code that tell the bot what to do. You can use variables (which hold information) and logic (like if-statements) to make your commands smarter.</p><p>For example, here’s a template that makes the bot roll a virtual dice and tell the user the result:</p><div class="language-twig line-numbers-mode" data-ext="twig"><pre class="language-twig"><code><span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">set</span> number <span class="token operator">=</span> random<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token delimiter punctuation">%}</span></span>
<span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">if</span> number <span class="token operator">==</span> <span class="token number">6</span> <span class="token delimiter punctuation">%}</span></span>
  You rolled a lucky 6 today!
<span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">else</span> <span class="token delimiter punctuation">%}</span></span>
  You rolled <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> number <span class="token delimiter punctuation">}}</span></span>!
<span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">endif</span> <span class="token delimiter punctuation">%}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will randomly pick a number between 1 and 6 and send a message based on what was rolled.</p><h2 id="working-with-variables" tabindex="-1"><a class="header-anchor" href="#working-with-variables" aria-hidden="true">#</a> Working with Variables</h2><p>To access the chat information, the bot provides variables called <code>command</code> and <code>event</code>. This contains all the details about the command that was triggered, message, the user who sent it, and the platform.</p><h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> Command</h3><p>The <code>command</code> object contains the following fields:</p><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>command.command</td><td>string</td><td></td></tr><tr><td>command.commands</td><td>array</td><td></td></tr><tr><td>command.command_aliases</td><td>array</td><td></td></tr><tr><td>command.response</td><td>mixed</td><td></td></tr><tr><td>command.command_regex</td><td>string</td><td></td></tr><tr><td>command.permissions</td><td>int</td><td></td></tr><tr><td>command.price</td><td>int</td><td></td></tr><tr><td>command.send_as</td><td>string</td><td></td></tr><tr><td>command.enable_when</td><td>string</td><td></td></tr><tr><td>command.user_cooldown</td><td>int</td><td></td></tr><tr><td>command.global_cooldown</td><td>int</td><td></td></tr><tr><td>command.is_visible</td><td>bool</td><td></td></tr></tbody></table><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h3>`,26),m=e(`<table><thead><tr><th><strong>Field</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td><code>event.id</code></td><td>string</td><td>The unique ID of the event.</td></tr><tr><td><code>event.type</code></td><td>string</td><td>The type of the event. Values can be <code>message</code> or <code>announcement</code>.</td></tr><tr><td><code>event.timestamp</code></td><td>int</td><td>The timestamp of the event in milliseconds (Y2K38-safe).</td></tr><tr><td><code>event.platform</code></td><td>string</td><td>The platform where the event occurred (e.g., <code>twitch</code>, <code>youtube</code>).</td></tr><tr><td><code>event.user</code></td><td>object</td><td>Information about the user who sent the message.</td></tr><tr><td><code>event.user.platform_id</code></td><td>string</td><td>The unique platform ID of the user.</td></tr><tr><td><code>event.user.username</code></td><td>string</td><td>The username of the user.</td></tr><tr><td><code>event.user.avatar_url</code></td><td>string</td><td>URL to the user&#39;s avatar.</td></tr><tr><td><code>event.user.color</code></td><td>string (nullable)</td><td>The user&#39;s chosen display color (may be null).</td></tr><tr><td><code>event.user.badges</code></td><td>array</td><td>An array of badges the user has.</td></tr><tr><td><code>event.user.badges.type</code></td><td>string</td><td>Type of badge (e.g., <code>moderator</code>, <code>subscriber</code>, <code>custom</code>).</td></tr><tr><td><code>event.user.badges.text</code></td><td>string</td><td>The label for the badge (e.g., <code>Moderator</code>, <code>TwitchCon 2022</code>).</td></tr><tr><td><code>event.user.badges.id</code></td><td>string</td><td>Unique ID for the badge.</td></tr><tr><td><code>event.user.badges.count</code></td><td>int (nullable)</td><td>The subscription tier or count, if applicable (may be null).</td></tr><tr><td><code>event.channel</code></td><td>object</td><td>Information about the channel where the event occurred.</td></tr><tr><td><code>event.channel.id</code></td><td>string</td><td>The unique OWN3D channel ID.</td></tr><tr><td><code>event.channel.platform_id</code></td><td>string</td><td>The platform-specific channel ID.</td></tr><tr><td><code>event.channel.username</code></td><td>string</td><td>The username of the channel owner.</td></tr><tr><td><code>event.channel.avatar_url</code></td><td>string</td><td>URL to the channel&#39;s avatar.</td></tr><tr><td><code>event.message</code></td><td>string</td><td>The full message content from the user.</td></tr><tr><td><code>event.fragments</code></td><td>array</td><td>An array of message fragments.</td></tr><tr><td><code>event.fragments.type</code></td><td>string</td><td>The type of fragment (<code>text</code>, <code>mention</code>, <code>emote</code>, <code>cheermote</code>).</td></tr><tr><td><code>event.fragments.text</code></td><td>string</td><td>The text or value of the fragment (e.g., <code>@World</code>, <code>KEKW!</code>).</td></tr><tr><td><code>event.fragments.data.platform</code></td><td>string</td><td>The platform for the emote or cheermote (e.g., <code>twitch</code>).</td></tr><tr><td><code>event.fragments.data.platform_id</code></td><td>string</td><td>The unique ID of the emote or cheermote.</td></tr><tr><td><code>event.fragments.data.emote_set_id</code></td><td>string</td><td>The emote set ID (for emotes).</td></tr><tr><td><code>event.fragments.data.bits</code></td><td>int</td><td>Number of bits for a cheermote.</td></tr><tr><td><code>event.fragments.data.tier</code></td><td>int</td><td>The tier of the cheermote.</td></tr><tr><td><code>event.parent</code></td><td>object (nullable)</td><td>Information about the parent message (nullable).</td></tr><tr><td><code>event.parent.id</code></td><td>string</td><td>The ID of the parent message.</td></tr><tr><td><code>event.parent.message</code></td><td>string (nullable)</td><td>The text of the parent message (nullable).</td></tr><tr><td><code>event.attributes</code></td><td>object</td><td>Additional attributes for the event.</td></tr><tr><td><code>event.attributes.edited</code></td><td>bool</td><td>Whether the message was edited.</td></tr><tr><td><code>event.attributes.accent</code></td><td>string</td><td>The accent color of the message (if applicable).</td></tr><tr><td><code>event.attributes.action</code></td><td>bool</td><td>Whether this message was an action message.</td></tr><tr><td><code>event.attributes.highlight</code></td><td>bool</td><td>Whether the message was highlighted in chat.</td></tr></tbody></table><p>Here’s an example of the <code>event</code> object:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1d021e81-4dd7-4d67-aae8-63838602e70e&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1725896016203</span><span class="token punctuation">,</span>
    <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;twitch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;platform_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;106415581&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GhostZero&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;avatar_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://api.own3d.pro/v1/resolvers/avatars/twitch/106415581&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FD0061&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;badges&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;game-developer&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;channel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3201156&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;platform_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;810355369&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GZ_QA5&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;avatar_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://api.own3d.pro/v1/resolvers/avatars/twitch/810355369&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!bal&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;edited&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;accent&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fragments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!bal&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="accessing-information-from-variables" tabindex="-1"><a class="header-anchor" href="#accessing-information-from-variables" aria-hidden="true">#</a> Accessing Information from Variables</h3><p>Here’s how to use this information in a command:</p><ul><li><strong>event.user.username</strong>: The username of the person who sent the message.</li><li><strong>event.message</strong>: The actual message that was sent.</li></ul><p>For example, if you want to make a command that repeats what someone says in the chat, use this template:</p><div class="language-twig line-numbers-mode" data-ext="twig"><pre class="language-twig"><code><span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> event<span class="token punctuation">.</span>user<span class="token punctuation">.</span>username <span class="token delimiter punctuation">}}</span></span> said: &quot;<span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> event<span class="token punctuation">.</span>message <span class="token delimiter punctuation">}}</span></span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If <code>Sender</code> types <code>!repeat Hello!</code>, the bot will say:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Sender said: &quot;!repeat Hello!&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="control-structures-making-decisions-in-commands" tabindex="-1"><a class="header-anchor" href="#control-structures-making-decisions-in-commands" aria-hidden="true">#</a> Control Structures: Making Decisions in Commands</h2><p>Sometimes, you want the bot to do something only if certain conditions are met. You can use an <strong>if-statement</strong> for that.</p><p>For example, here’s a command that gives a special response if the user is a subscriber:</p><div class="language-twig line-numbers-mode" data-ext="twig"><pre class="language-twig"><code><span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">if</span> event<span class="token punctuation">.</span>user<span class="token punctuation">.</span>badges<span class="token operator">|</span>filter<span class="token punctuation">(</span>b <span class="token operator">=</span><span class="token operator">&gt;</span> b<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token string"><span class="token punctuation">&#39;</span>subscriber<span class="token punctuation">&#39;</span></span><span class="token punctuation">)</span> <span class="token delimiter punctuation">%}</span></span>
  Thank you for being a subscriber, <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> event<span class="token punctuation">.</span>user<span class="token punctuation">.</span>username <span class="token delimiter punctuation">}}</span></span>!
<span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">else</span> <span class="token delimiter punctuation">%}</span></span>
  Hello, <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> event<span class="token punctuation">.</span>user<span class="token punctuation">.</span>username <span class="token delimiter punctuation">}}</span></span>! Consider subscribing for special perks!
<span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">endif</span> <span class="token delimiter punctuation">%}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This checks if the user has a <strong>subscriber</strong> badge and sends a different message based on the result.</p><h2 id="examples-of-custom-commands" tabindex="-1"><a class="header-anchor" href="#examples-of-custom-commands" aria-hidden="true">#</a> Examples of Custom Commands</h2><p>Here are some examples of what you can do with custom commands:</p><h3 id="_1-magic-8-ball-command" tabindex="-1"><a class="header-anchor" href="#_1-magic-8-ball-command" aria-hidden="true">#</a> 1. Magic 8-Ball Command</h3><p>This command will let the bot respond with a random answer when someone asks a question using the <code>!8ball</code> command.</p><div class="language-twig line-numbers-mode" data-ext="twig"><pre class="language-twig"><code><span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">set</span> answers <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string"><span class="token punctuation">&quot;</span>Yes<span class="token punctuation">&quot;</span></span><span class="token punctuation">,</span> <span class="token string"><span class="token punctuation">&quot;</span>No<span class="token punctuation">&quot;</span></span><span class="token punctuation">,</span> <span class="token string"><span class="token punctuation">&quot;</span>Maybe<span class="token punctuation">&quot;</span></span><span class="token punctuation">,</span> <span class="token string"><span class="token punctuation">&quot;</span>Ask again later<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">]</span> <span class="token delimiter punctuation">%}</span></span>
<span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> random<span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token delimiter punctuation">}}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-hug-command" tabindex="-1"><a class="header-anchor" href="#_2-hug-command" aria-hidden="true">#</a> 2. Hug Command</h3><p>This command will allow the bot to send a hug to a specified user:</p><div class="language-twig line-numbers-mode" data-ext="twig"><pre class="language-twig"><code><span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">set</span> target <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token delimiter punctuation">%}</span></span>
<span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">if</span> target <span class="token delimiter punctuation">%}</span></span>
  <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> event<span class="token punctuation">.</span>user<span class="token punctuation">.</span>username <span class="token delimiter punctuation">}}</span></span> sends a hug to <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> target <span class="token delimiter punctuation">}}</span></span> &lt;3
<span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">else</span> <span class="token delimiter punctuation">%}</span></span>
  Use &quot;!hug <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>&quot; to send a hug!
<span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">endif</span> <span class="token delimiter punctuation">%}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-show-user-s-twitch-url" tabindex="-1"><a class="header-anchor" href="#_3-show-user-s-twitch-url" aria-hidden="true">#</a> 3. Show User&#39;s Twitch URL</h3><p>Want to display someone’s Twitch URL? This command will fetch and display their Twitch channel link:</p><div class="language-twig line-numbers-mode" data-ext="twig"><pre class="language-twig"><code>Check out <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> event<span class="token punctuation">.</span>user<span class="token punctuation">.</span>username <span class="token delimiter punctuation">}}</span></span> at https://twitch.tv/<span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> event<span class="token punctuation">.</span>user<span class="token punctuation">.</span>username <span class="token delimiter punctuation">}}</span></span>!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="next-steps-explore-more-functions" tabindex="-1"><a class="header-anchor" href="#next-steps-explore-more-functions" aria-hidden="true">#</a> Next Steps: Explore More Functions</h2>`,27),h=e(`<ul><li>Fetching data from a database</li><li>Making HTTP requests</li><li>Managing user cooldowns</li><li>And more!</li></ul><p>By using these building blocks, you’ll be able to create even more advanced custom commands. Don’t hesitate to experiment and have fun!</p><p>Certainly! Here’s a polished version of your user documentation for proxying commands from OWN3D:</p><h2 id="proxy-pass-own3d-commands" tabindex="-1"><a class="header-anchor" href="#proxy-pass-own3d-commands" aria-hidden="true">#</a> Proxy Pass OWN3D Commands</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>Note:</strong> This feature is only intended for advanced users who are familiar with coding and APIs.</p></div><p>With Proxy Pass, you can integrate and proxy pass commands from OWN3D to other bot services. This feature allows you to execute commands from OWN3D on other platforms effectively. To integrate and proxy pass commands from OWN3D to other bot services, follow the instructions below:</p><h3 id="template-for-proxy-pass" tabindex="-1"><a class="header-anchor" href="#template-for-proxy-pass" aria-hidden="true">#</a> Template for Proxy Pass</h3><p>Use the following code to set up the proxy pass. Replace the URL with the desired endpoint:</p><div class="language-twig line-numbers-mode" data-ext="twig"><pre class="language-twig"><code><span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> proxy_pass<span class="token punctuation">(</span><span class="token string"><span class="token punctuation">&#39;</span>https://example.com/api/commands<span class="token punctuation">&#39;</span></span><span class="token punctuation">)</span> <span class="token delimiter punctuation">}}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>proxy_pass</code> function will send a request to the specified URL and also include the necessary data like <code>event</code> and <code>command</code> objects as JSON. This allows you to process the command and send a response back to OWN3D. The response, which must be a <code>text/plain</code> content type, will be sent back to the chat.</p><h3 id="registering-commands-with-own3d-pro-api" tabindex="-1"><a class="header-anchor" href="#registering-commands-with-own3d-pro-api" aria-hidden="true">#</a> Registering Commands with OWN3D Pro API</h3><p>To register a command with OWN3D Pro, send a POST request to the OWN3D Pro API. Below is a sample HTTP request for registering a command:</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST https://api.own3d.pro/v1/bots/{user}/commands

{
  &quot;command&quot;: &quot;bal&quot;,
  &quot;response&quot;: &quot;{{ proxy_pass(&#39;https://example.com/api/commands&#39;) }}&quot;,
  &quot;command_aliases&quot;: [&quot;$&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function g(k,v){const n=i("RouterLink");return r(),p("div",null,[u,a("p",null,[t("Based on our "),s(n,{to:"/docs/chatbot/message-protocol.html#message-reference"},{default:o(()=>[t("Message Protocol - Message Reference")]),_:1}),t(" you also have access to the following fields:")]),m,a("p",null,[t("Feel free to explore more by checking out our "),s(n,{to:"/docs/chatbot/template-reference.html"},{default:o(()=>[t("Template Reference")]),_:1}),t(" for details on other useful commands and features, such as:")]),h])}const w=d(l,[["render",g],["__file","custom-commands.html.vue"]]);export{w as default};
