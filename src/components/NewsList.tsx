import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { format } from 'date-fns';

import { News } from '../types/types';
import { getListOfNews } from '../api/api';
import { Loader } from './Loader';
import { isEmpty } from 'lodash';

export const NewsList = () => {
  const [pagination, setPagination] = useState(30);
  const [data, setData] = useState<Array<News>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getListOfNews(pagination).then((res) => {
      setLoading(false);
      setData(res);
    });
  }, [pagination]);

  const handleLoadMore = () => {
    setLoading(true);
    setPagination(pagination + 30);
  };

  return (
    <>
      {data.map(({ time, title, url, by }, idx) => (
        <Card className="mb-3" key={idx}>
          <Card.Header>
            {format(new Date(time * 1000), 'd MMM yyy')}
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="title"
                  style={{ color: ' #121212', textDecoration: 'none' }}
                  href={url}
                >
                  {title}
                </a>
              </p>
              <footer className="blockquote-footer">
                <cite title={`by ${by}`}>by {by}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
      {(loading || isEmpty(data)) && <Loader />}
      <Button onClick={handleLoadMore} variant="warning">
        Load More...
      </Button>
    </>
  );
};
