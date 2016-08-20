function solve() {
	return function() {
		var template = [
		'<h1>{{title}}</h1>',
'<ul>',
'{{#posts}}',
'<li>',
			'{{#if author}}',
				'<div class="post">',
				'<p class="author">',
						'<a class="user" href="/user/{{author}}">{{author}}</a>',
				'</p>',
				'<pre class="content">{{{text}}}</pre>',
				'</div>',
			'{{else}}',
				'<div class="post">',
				'<p class="author">',
						'<a class="anonymous">Anonymous</a>',
				'</p>',
				'<pre class="content">{{{text}}}</pre>',
				'</div>',
			'{{/if}}',

			'{{#if comments}}',
		'<ul>',
				'{{#comments}}',
			'{{#if deleted}}',
			'{{else}}',
						'<li>',
								'{{#if author}}',
								'<div class="comment">',
								'<p class="author">',
										'<a class="user" href="/user/{{author}}">{{author}}</a>',
								'</p>',
								'<pre class="content">{{text}}</pre>',
								'</div>',
								'{{else}}',
								'<div class="comment">',
								'<p class="author">',
										'<a class="anonymous">Anonymous</a>',
								'</p>',
								'<pre class="content">{{text}}</pre>',
								'</div>',
								'{{/if}}',						
						'</li>',
			'{{/if}}',			
			'{{/comments}}',
		'</ul>',
			'{{/if}}',
'</li>',
'{{/posts}}',
'</ul>'
		].join('\n');

		return template;
	}
}

// submit the above

if(typeof module !== 'undefined') {
	module.exports = solve;
}
