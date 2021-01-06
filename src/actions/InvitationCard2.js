const URL = require('../settings/url');


module.exports = async function getInvitationCard(context) {
    const imageObjects = [
        { label: "封面", fileName: "invitation_cover.jpg" },
        { label: "內頁", fileName: "invitation_content.jpg" }
    ];
    const template = imageObjects.map((item) => {
        return {
            "imageUrl": URL.INVITATION_CARD.replace("${item}", item.fileName),
            "action": {
                "type": "uri",
                "label": item.label,
                "uri": URL.INVITATION_CARD.replace("${item}", item.fileName)
            }
        }
    });

    const altText = '電子喜帖';
    await context.sendImageCarouselTemplate(altText, template);
}
