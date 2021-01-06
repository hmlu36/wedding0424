const fs = require('fs');

module.exports = function getInvitationCard(context) {
    ["invitation_cover.jpg", "invitation_content.jpg"].forEach(element => {
        context.sendFile(fs.createReadStream('photos/' + element));
    });
};
