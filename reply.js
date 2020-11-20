const Derieri = require('derieri');
const deri = new Derieri.Client();
const context = {};

module.exports.reply = async function reply(message, author) {
		if (!context[author.id]) {
			context[author.id] = [];
		}
		const response = await deri.reply(message, context[author.id]);
		context[author.id].push(message);
		context[author.id].push(response);
		return response;
}