export const query = `
{
  user(login: "JefteMedeiros") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
        }
      }
    }
  }
}
`;

