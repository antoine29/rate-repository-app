import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryListContainer';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository list correctly', () => {
            const repositories = {
                pageInfo: {
                    totalCount: 8,
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            const repositoriesArray = repositories.edges.map(edge => edge.node);

            const { debug, getByTestId, getByText } = render(<RepositoryListContainer repositories={repositoriesArray} />);
            // debug();
            for (const edge of repositories.edges) {
                const card = getByTestId(`repo-${edge.node.id}`);
                const name = getByText(edge.node.fullName);
                const description = getByText(edge.node.description);
                const language = getByText(edge.node.language);
                const forksCount = getByText(String(edge.node.forksCount));
                const stargazersCount = getByText(String(edge.node.stargazersCount));
                const ratingAverage = getByText(String(edge.node.ratingAverage));
                expect(card).toContainElement(name);
                expect(card).toContainElement(description);
                expect(card).toContainElement(language);
                expect(card).toContainElement(forksCount);
                expect(card).toContainElement(stargazersCount);
                expect(card).toContainElement(ratingAverage);   
            }
        });
    });
});