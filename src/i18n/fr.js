import frenchMessages from 'ra-language-french';
import treeFrenchMessages from 'ra-tree-language-french';
import { mergeTranslations } from 'react-admin';

export default {
    simple: {
        action: {
            close: 'Fermer',
            resetViews: 'RÃ©initialiser des vues',
        },
        'create-post': 'Nouveau post',
    },
    ...mergeTranslations(frenchMessages, treeFrenchMessages),
    resources: {
        posts: {
            name: 'Article |||| Articles',
            fields: {
                average_note: 'Note moyenne',
                body: 'Contenu',
                comments: 'Commentaires',
                commentable: 'Commentable',
                created_at: 'CrÃ©Ã© le',
                notifications: 'Destinataires de notifications',
                nb_view: 'Nb de vues',
                password: 'Mot de passe (si protÃ©gÃ©)',
                pictures: 'Photos associÃ©es',
                published_at: 'PubliÃ© le',
                teaser: 'Description',
                tags: 'CatÃ©gories',
                title: 'Titre',
                views: 'Vues',
                authors: 'Auteurs',
            },
        },
        comments: {
            name: 'Commentaire |||| Commentaires',
            fields: {
                body: 'Contenu',
                created_at: 'CrÃ©Ã© le',
                post_id: 'Article',
                author: {
                    name: 'Auteur',
                },
            },
        },
        users: {
            name: 'User |||| Users',
            fields: {
                name: 'Name',
                role: 'Role',
            },
        },
    },
    post: {
        list: {
            search: 'Recherche',
        },
        form: {
            summary: 'RÃ©sumÃ©',
            body: 'Contenu',
            miscellaneous: 'Extra',
            comments: 'Commentaires',
        },
        edit: {
            title: 'Article "%{title}"',
        },
    },
    comment: {
        list: {
            about: 'Au sujet de',
        },
    },
    user: {
        list: {
            search: 'Recherche',
        },
        form: {
            summary: 'RÃ©sumÃ©',
            security: 'SÃ©curitÃ©',
        },
        edit: {
            title: 'Utilisateur "%{title}"',
        },
    },
};
