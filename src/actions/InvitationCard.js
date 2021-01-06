const URL = require('../settings/url');

module.exports = function getInvitationCard(context) {

    const cover = "1j2YbkMDpvyAIvsPm8I3hk-ASnmxN7hbo";
    const content = "1j2YbkMDpvyAIvsPm8I3hk-ASnmxN7hbo";
    [cover, content].forEach(element => {

        context.sendImage({
            originalContentUrl: URL.INVITATION_CARD.replace("${id}", element) + "=w1139-h308",
            previewImageUrl: URL.INVITATION_CARD.replace("${id}", element) + "=w341-h201",
        });

    })
};
