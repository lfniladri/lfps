function arrayListFlattern(response: any):Array<any> {
  return response.map((element: { data: any; id: string }) => {
    return {
      id: element.id,
      ...element.data,
    };
  });
}

export { arrayListFlattern };
