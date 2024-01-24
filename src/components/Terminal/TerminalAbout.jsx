const TerminalAbout = () => {
  const contentLg = `
  {
      name: 'Tim Engle',
      location: 'SF Bay Area',
      languages: ['javascript', 'typescript', 'go', 'python'],
      skills: {
        backend: ['nodejs', 'express', 'go', 'socketio', 'mongodb', 'postgres' 'auth0', 'nginx'],
        frontend: ['react', 'html5', 'css3', 'tailwindcss']
      },
      hobbies: ['cycling', 'music', 'gardening']      
  }
  `;

  const contentMd = `
  {
      name: 'Tim Engle',
      location: 'SF Bay Area',
      profession: 'fullstack engineer',
      languages: ['javascript', 'typescript', 'go', 'python'],
      skills: {
        backend: ['nodejs', 'express', 'go' 'socketio', 'mongodb', 
          'postgres' 'auth0', 'nginx'],
        frontend: ['react', 'html5', 'css3', 'tailwindcss']
      },
      hobbies: ['cycling', 'music', 'gardening']      
  }
  `;

  const contentSm = `
  {
      name: 'Tim Engle',
      location: 'SF Bay Area',
      profession: 'fullstack engineer',
      currently: 'Mastering node'
      languages: [
        'typescript'
        'javascript',
        'go',
        'python'
      ],
      skills: {
        backend: [
          'nodejs', 'express',
          'go', 'socketio', 
          'mongodb', 'postgres',
          'auth0', 'nginx'
        ],
        frontend: [
          'react', 'html5', 
          'css3', 'tailwindcss'
        ]
      },
      hobbies: [
        'cycling', 'music', 'gardening'
      ]      
  }
  `;

  return (
    <>
      {/* For large screens */}
      <pre className="hidden text-termTop lg:block">{contentLg}</pre>

      {/* For medium screens */}
      <pre className="hidden text-termTop md:block lg:hidden">{contentMd}</pre>

      {/* For small screens */}
      <pre className="block text-termTop md:hidden">{contentSm}</pre>
    </>
  );
};

export default TerminalAbout;
