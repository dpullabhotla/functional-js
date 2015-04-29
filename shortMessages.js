function getShortMessages(messages){
    return messages.filter(function shortMessage(msg){
	return msg.message.length < 50;
    }).map(function(msg){
	return msg.message
    })
}

module.exports = getShortMessages
