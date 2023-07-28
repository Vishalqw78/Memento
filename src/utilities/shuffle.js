const shuffle = () => {
    const assets = [
      { image: '/assets/go.png' },
      { image: '/assets/firebase.png' },
      { image: '/assets/flutter.png'},
      { image: '/assets/js.png' },
      { image: '/assets/next.png' },
      { image: '/assets/node.png' },
      { image: '/assets/react.png'},
      { image: '/assets/ts.png' },
    ];
    return [...assets, ...assets]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
  };
  
  export default shuffle;