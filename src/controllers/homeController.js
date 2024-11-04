import promos from '../../data/promos.json' with { type: 'json' };

const homeController = {
    index(req, res) {
        // res.locals.promos = promos;

        res.render('index', { promos: promos });
    },
};

export { homeController };
