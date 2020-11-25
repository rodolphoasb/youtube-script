import Nav from '../components/nav'
import React, { useState } from 'react'

export default function IndexPage() {
  const [teaser, setTeaser] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [development, setDevelopment] = useState('')
  const [conclusion, setConclusion] = useState('')

  return (
    <div className='space-y-20'>
      <Nav />
      <div className='py-20'>
        <h1 className='text-5xl text-center text-gray-700 dark:text-gray-100'>
          Contador de Palavras - Script do Youtube
        </h1>
      </div>
      {/* Teaser/Hook */}
      <div className='flex items-center w-10/12 mx-auto'>
        {/* Seção contador */}
        <div className='flex flex-col w-1/4 mr-2'>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>Contador de palavras</p>
            <p className='text-center'>
              {teaser.split(/\s+/gi).filter(Boolean).length}
            </p>
          </div>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>
              Tempo aproximado de fala (segundos)
            </p>
            <p className='text-center'>
              {(teaser.split(/\s+/gi).filter(Boolean).length / 2.6).toFixed(2)}
            </p>
          </div>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>
              Tempo aproximado de fala (Minutos)
            </p>
            <p className='text-center'>
              {(
                teaser.split(/\s+/gi).filter(Boolean).length /
                2.6 /
                60
              ).toFixed(0) +
                ' ' +
                'm'}{' '}
              e{' '}
              {(
                (teaser.split(/\s+/gi).filter(Boolean).length / 2.6) %
                60
              ).toFixed(2) +
                ' ' +
                's'}
            </p>
          </div>
        </div>

        {/* Parte 2 - Título e textarea */}
        <div className='w-3/4'>
          {/* Seção título e descrição  */}
          <div>
            <h1>Teaser/Hook</h1>
          </div>
          {/* Seção do Input Teaser */}
          <div>
            <textarea
              type='textarea'
              className=' border-2 border-gray-200 w-full h-64 p-2'
              name='teaser'
              id='teaser'
              onChange={e => setTeaser(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Introdução */}
      <div className='flex items-center w-10/12 mx-auto'>
        {/* Seção contador */}
        <div className='flex flex-col w-1/4 mr-2'>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>Contador de palavras</p>
            <p className='text-center'>
              {introduction.split(/\s+/gi).filter(Boolean).length}
            </p>
          </div>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>
              Tempo aproximado de fala (segundos)
            </p>
            <p className='text-center'>
              {(
                introduction.split(/\s+/gi).filter(Boolean).length / 2.6
              ).toFixed(2)}
            </p>
          </div>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>
              Tempo aproximado de fala (Minutos)
            </p>
            <p className='text-center'>
              {(
                introduction.split(/\s+/gi).filter(Boolean).length /
                2.6 /
                60
              ).toFixed(0) +
                ' ' +
                'm'}{' '}
              e{' '}
              {(
                (introduction.split(/\s+/gi).filter(Boolean).length / 2.6) %
                60
              ).toFixed(2) +
                ' ' +
                's'}
            </p>
          </div>
        </div>

        {/* Parte 2 - Título e textarea */}
        <div className='w-3/4'>
          {/* Seção título e descrição  */}
          <div>
            <h1>Introdução</h1>
          </div>
          {/* Seção do Input Teaser */}
          <div>
            <textarea
              type='textarea'
              className=' border-2 border-gray-200 w-full h-64 p-2'
              name='teaser'
              id='teaser'
              onChange={e => setIntroduction(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Desenvolvimento */}
      <div className='flex items-center w-10/12 mx-auto'>
        {/* Seção contador */}
        <div className='flex flex-col w-1/4 mr-2'>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>Contador de palavras</p>
            <p className='text-center'>
              {development.split(/\s+/gi).filter(Boolean).length}
            </p>
          </div>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>
              Tempo aproximado de fala (segundos)
            </p>
            <p className='text-center'>
              {(
                development.split(/\s+/gi).filter(Boolean).length / 2.6
              ).toFixed(2)}
            </p>
          </div>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>
              Tempo aproximado de fala (Minutos)
            </p>
            <p className='text-center'>
              {(
                development.split(/\s+/gi).filter(Boolean).length /
                2.6 /
                60
              ).toFixed(0) +
                ' ' +
                'm'}{' '}
              e{' '}
              {(
                (development.split(/\s+/gi).filter(Boolean).length / 2.6) %
                60
              ).toFixed(2) +
                ' ' +
                's'}
            </p>
          </div>
        </div>

        {/* Parte 2 - Título e textarea */}
        <div className='w-3/4'>
          {/* Seção título e descrição  */}
          <div>
            <h1>Desenvolvimento</h1>
          </div>
          {/* Seção do Input Teaser */}
          <div>
            <textarea
              type='textarea'
              className=' border-2 border-gray-200 w-full h-64 p-2'
              name='teaser'
              id='teaser'
              onChange={e => setDevelopment(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Conclusão */}
      <div className='flex items-center w-10/12 mx-auto pb-16'>
        {/* Seção contador */}
        <div className='flex flex-col w-1/4 mr-2'>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>Contador de palavras</p>
            <p className='text-center'>
              {conclusion.split(/\s+/gi).filter(Boolean).length}
            </p>
          </div>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>
              Tempo aproximado de fala (segundos)
            </p>
            <p className='text-center'>
              {(conclusion.split(/\s+/gi).filter(Boolean).length / 2.6).toFixed(
                2
              )}
            </p>
          </div>
          <div className='border-b border-gray-600'>
            <p className='text-center mr-4 font-bold'>
              Tempo aproximado de fala (Minutos)
            </p>
            <p className='text-center'>
              {(
                conclusion.split(/\s+/gi).filter(Boolean).length /
                2.6 /
                60
              ).toFixed(0) +
                ' ' +
                'm'}{' '}
              e{' '}
              {(
                (conclusion.split(/\s+/gi).filter(Boolean).length / 2.6) %
                60
              ).toFixed(2) +
                ' ' +
                's'}
            </p>
          </div>
        </div>

        {/* Parte 2 - Título e textarea */}
        <div className='w-3/4'>
          {/* Seção título e descrição  */}
          <div>
            <h1>Conclusão</h1>
          </div>
          {/* Seção do Input Teaser */}
          <div>
            <textarea
              type='textarea'
              className=' border-2 border-gray-200 w-full p-2 h-60'
              name='teaser'
              id='teaser'
              onChange={e => setConclusion(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
