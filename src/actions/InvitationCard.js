const URL = require('../settings/url');

module.exports = function getInvitationCard(context) {
    ["invitation_cover.jpg","invitation_content.jpg"].forEach(element => {
        context.sendImage({
            originalContentUrl: URL.INVITATION_CARD.replace("${item}", element),
            previewImageUrl: URL.INVITATION_CARD.replace("${item}", element),
        });
    })
};
