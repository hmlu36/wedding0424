const URL = require('../settings/url');

module.exports = function getInvitationCard(context) {

    const cover = "1j2YbkMDpvyAIvsPm8I3hk-ASnmxN7hbo";
    const content = "1WHESfjjey6k6OhiHll4Vnz86rTPbcqWE";
    [cover, content].forEach(element => {

        context.sendImage({
            originalContentUrl: URL.INVITATION_CARD.replace("${item}", element),
            previewImageUrl: URL.INVITATION_CARD.replace("${item}", element),
        });

    })
};
