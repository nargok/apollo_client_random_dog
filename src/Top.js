import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Top = () => {
  return (
    <div>
      <h1>コンポーネント選択</h1>
      <Link to="/random"><Button>Random</Button></Link>
      <Link to="/husky"><Button>Husky</Button></Link>
    </div>
  )
};

export default Top;