const URL = require('../settings/url');


module.exports = async function getInvitationCard(context) {

    const template = [{ lable: "封面", fileName: "invitation_cover.jpg" }, { label: "內頁", fileName: "invitation_content.jpg" }].map((item) => {
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
