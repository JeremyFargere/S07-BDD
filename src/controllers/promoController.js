import promos from '../../data/promos.json' with { type: 'json' };

const promoController = {
    promoPage(req, res, next) {
        // ON récupère l'id de l'URL
        const promoId = Number(req.params.id);
        let foundPromo;

        for (const promo of promos) {
            if (promo.id === promoId) {
                foundPromo = promo;
                break;
            }
        }

        foundPromo = promos.find((promo) => {
            return promo.id === promoId;
        });

        if (!foundPromo) {
            return next();
        }

        res.render('index', { promo: foundPromo });
    },
};

export { promoController };
