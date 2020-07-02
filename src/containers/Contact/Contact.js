/** @jsx jsx */
import {
  Flex,
  Box,
  Label,
  Input,
  Textarea,
  Button,
  Text,
  Styled,
  Link,
  jsx,
  Spinner,
  Close,
  Alert,
} from 'theme-ui';
import { useState } from 'react';
import Heading from 'components/Heading';
import SocialMedia from 'components/SocialMedia';

const URL = 'https://getform.io/f/dbf90445-7cfa-47a7-aa5f-c45f7d3f874b';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const value = {
      name,
      email,
      message,
    };
    setLoading(true);
    setStatus('');
    try {
      const response = await fetch(URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
        crossDomain: true,
        processData: false,
        contentType: false,
      });

      // const data = await response.json();

      if (response.status !== 200 || response.status === 201) {
        throw TypeError('error');
      }

      setName('');
      setEmail('');
      setMessage('');
      setStatus('success');
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Flex
      as="article"
      py="5"
      sx={{
        flexDirection: 'column',
        '@media screen and (min-width: 52em)': {
          flexDirection: 'row',
        },
      }}
    >
      <Box
        p={2}
        sx={{
          width: '100%',
          '@media screen and (min-width: 52em)': {
            width: '50%',
          },
        }}
      >
        <Heading text="Just say Hi!" />
        <Text mt="3">
          I&apos;m looking forward to helping you. Just send a message about
          what I can do.
        </Text>

        <small sx={{ fontWeight: 'bold', display: 'inline-block', mt: 3 }}>
          Email:
        </small>
        <Styled.h3>
          <Link href="mailto: ivjosesantos@gmail.com" rel="noopener">
            ivjosesantos@gmail.com
          </Link>
        </Styled.h3>

        <SocialMedia />
      </Box>
      <Box
        p={2}
        sx={{
          width: '100%',
          mt: 3,
          '@media screen and (min-width: 52em)': {
            width: '50%',
          },
        }}
      >
        {status && (
          <Alert mb="3" variant={status === 'success' ? 'success' : 'error'}>
            {status === 'success'
              ? 'Thank you for sending me a message!'
              : 'Error, Something went wrong'}
            <Close ml="auto" mr={-2} onClick={() => setStatus('')} />
          </Alert>
        )}

        <Box as="form" onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            id="name"
            mb={3}
            type="text"
            placeholder="How should we call you?"
            value={name}
            onChange={e => {
              setStatus('');
              setName(e.target.value);
            }}
            required
          />

          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            mb={3}
            placeholder="Your email address"
            value={email}
            onChange={e => {
              setStatus('');
              setEmail(e.target.value);
            }}
            required
          />

          <Label htmlFor="comment">Message</Label>
          <Textarea
            name="comment"
            id="comment"
            rows="6"
            mb={3}
            placeholder="How can I help?"
            value={message}
            onChange={e => {
              setStatus('');
              setMessage(e.target.value);
            }}
            required
          />

          <Button
            type="submit"
            disabled={loading}
            pl={loading && '40px'}
            sx={{ position: 'relative' }}
          >
            {loading && (
              <Spinner
                variant="styles.spinner"
                size={18}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '24px',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )}
            GET IN TOUCH
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Contact;
