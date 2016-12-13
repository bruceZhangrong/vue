/**
 * ES6
 */
/*import $ from 'jQuery';

const tmpl = addrs => `
	<table>
		${addrs.map(addr => `
			<tr>
				<td>${addr.first}</td>
				<td>${addr.last}</td>
			</tr>
		`).join("")}
	</table>
`;
const data = [
	{first: 'bruce', last: 'zhang'},
	{first: 'jack', last: 'cheng'}
];
console.log(tmpl(data));
$('body').append(tmpl(data))
let str = 'return ' + '`Hello ${name}!`';
let fun = new Function('name', str);
console.log(fun('jack'));



let str = '(name) => `hello ${name}!`';
let func = eval.call(null, str);
console.log(func('bruce'))

 




var template = `
	<ul>
		<% for(let i = 0; i < data.supplies.length; i++){ %>
			<li><%= data.supplies[i] %></li>
		<% } %>
	</ul>
`;
function compile(template){
	var evalExpr = /<%=(.+?)%>/g;
	var expr = /<%([\s\S]+?)%>/g;

	template = template
		.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
	    .replace(expr, '`); \n $1 \n  echo(`');
	template = 'echo(`' + template + '`);';

	var script =`
		(function parse(data){
		var output = "";
	
	    function echo(html){
	    	output += html;
	    }

		${ template }

		return output;
	})`;
	return script;
}

var parse = eval(compile(template));
document.body.innerHTML = parse({supplies: ['html', 'javascript', 'css']});
*/




var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  var result = '';
  var i = 0;
	console.log(literals,literals.length)
  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

console.log(msg);