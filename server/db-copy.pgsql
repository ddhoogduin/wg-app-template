--
-- PostgreSQL database dump
--

-- Dumped from database version 10.7 (Ubuntu 10.7-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.7 (Ubuntu 10.7-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: API; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."API" (
    id integer NOT NULL,
    name character varying(40) NOT NULL,
    url character varying(255) NOT NULL
);


ALTER TABLE public."API" OWNER TO postgres;

--
-- Name: client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client (
    id integer NOT NULL,
    name character varying(40) NOT NULL,
    alias character varying(40) NOT NULL,
    website text,
    description text,
    modified_at date
);


ALTER TABLE public.client OWNER TO postgres;

--
-- Name: client_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.client_id_seq OWNER TO postgres;

--
-- Name: client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.client_id_seq OWNED BY public.client.id;


--
-- Name: form; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.form (
    id integer NOT NULL,
    client_id integer NOT NULL,
    name character varying(40) NOT NULL,
    "API_id" integer,
    tool_name text NOT NULL,
    modified_at date,
    published boolean,
    job_description text
);


ALTER TABLE public.form OWNER TO postgres;

--
-- Name: form_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.form_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.form_id_seq OWNER TO postgres;

--
-- Name: form_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.form_id_seq OWNED BY public.form.id;


--
-- Name: form_input; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.form_input (
    id integer NOT NULL,
    form_id integer NOT NULL,
    name character varying(80) NOT NULL,
    type text,
    parameter character varying,
    label character varying
);


ALTER TABLE public.form_input OWNER TO postgres;

--
-- Name: form_input_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.form_input_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.form_input_id_seq OWNER TO postgres;

--
-- Name: form_input_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.form_input_id_seq OWNED BY public.form_input.id;


--
-- Name: input_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.input_type (
    id integer NOT NULL,
    name character varying(40) NOT NULL
);


ALTER TABLE public.input_type OWNER TO postgres;

--
-- Name: input_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.input_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.input_type_id_seq OWNER TO postgres;

--
-- Name: input_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.input_type_id_seq OWNED BY public.input_type.id;


--
-- Name: input_validation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.input_validation (
    id integer NOT NULL,
    name character varying(80) NOT NULL
);


ALTER TABLE public.input_validation OWNER TO postgres;

--
-- Name: input_validation_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.input_validation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.input_validation_id_seq OWNER TO postgres;

--
-- Name: input_validation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.input_validation_id_seq OWNED BY public.input_validation.id;


--
-- Name: url_direction_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.url_direction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.url_direction_id_seq OWNER TO postgres;

--
-- Name: url_direction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.url_direction_id_seq OWNED BY public."API".id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    firstname character varying(255) NOT NULL,
    lastname character varying(255)
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: API id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."API" ALTER COLUMN id SET DEFAULT nextval('public.url_direction_id_seq'::regclass);


--
-- Name: client id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client ALTER COLUMN id SET DEFAULT nextval('public.client_id_seq'::regclass);


--
-- Name: form id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form ALTER COLUMN id SET DEFAULT nextval('public.form_id_seq'::regclass);


--
-- Name: form_input id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_input ALTER COLUMN id SET DEFAULT nextval('public.form_input_id_seq'::regclass);


--
-- Name: input_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.input_type ALTER COLUMN id SET DEFAULT nextval('public.input_type_id_seq'::regclass);


--
-- Name: input_validation id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.input_validation ALTER COLUMN id SET DEFAULT nextval('public.input_validation_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: API; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."API" (id, name, url) FROM stdin;
1	Galaxy API	http://test.nl
\.


--
-- Data for Name: client; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.client (id, name, alias, website, description, modified_at) FROM stdin;
1	KeyGenes	keygenes	http://keygenes.nl	KeyGenes uses a dataset to quantify the extent to which next-generation sequencing or microarray data resemble specific cell or tissue types in the human fetus.	2019-04-30
8	FASTQ - trimmer	fastq_trim	\N	This tool allows you to trim the ends of reads.	2019-05-01
9	SAM-to-BAM	sam_bam	\N	onverts SAM dataset into its binary, BAM, representation using the samtools view and sort commands.	2019-05-01
3	BLAST+ blastx	blastx	\N	Search a protein database using a translated nucleotide query, using the NCBI BLAST+ blastx command line tool.	2019-05-01
10	FASTQC	fastq_c	\N	FastQC aims to provide a simple way to do some quality control checks on raw sequence data coming from high throughput sequencing pipelines.	2019-05-01
2	Snippy	snippy	\N	Snippy finds SNPs between a haploid reference genome and your NGS sequence reads. It will find both substitutions (snps) and insertions/deletions (indels).	2019-05-01
\.


--
-- Data for Name: form; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.form (id, client_id, name, "API_id", tool_name, modified_at, published, job_description) FROM stdin;
4	8	FastQ trimmer	1	trimmer	2019-05-03	t	Running trimmer
5	8	FastQ filter	1	toolshed.g2.bx.psu.edu/repos/devteam/fastq_filter/fastq_filter/1.1.1	2019-05-03	f	Running filter
8	1	KeyGenes algorithm 	1	Not determinant 	2019-05-08	t	Running tool
\.


--
-- Data for Name: form_input; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.form_input (id, form_id, name, type, parameter, label) FROM stdin;
45	8	Dataset	file	dataset	Dataset
\.


--
-- Data for Name: input_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.input_type (id, name) FROM stdin;
\.


--
-- Data for Name: input_validation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.input_validation (id, name) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, email, password, firstname, lastname) FROM stdin;
1	postgres@gmail.com	test123	Dylan	Hoogduin
\.


--
-- Name: client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_id_seq', 9, true);


--
-- Name: form_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.form_id_seq', 8, true);


--
-- Name: form_input_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.form_input_id_seq', 45, true);


--
-- Name: input_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.input_type_id_seq', 1, false);


--
-- Name: input_validation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.input_validation_id_seq', 1, false);


--
-- Name: url_direction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.url_direction_id_seq', 1, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 1, true);


--
-- Name: client client_alias_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_alias_key UNIQUE (alias);


--
-- Name: client client_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_name_key UNIQUE (name);


--
-- Name: client client_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pkey PRIMARY KEY (id);


--
-- Name: form_input form_input_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_input
    ADD CONSTRAINT form_input_pkey PRIMARY KEY (id);


--
-- Name: form form_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form
    ADD CONSTRAINT form_name_key UNIQUE (name);


--
-- Name: form form_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form
    ADD CONSTRAINT form_pkey PRIMARY KEY (id);


--
-- Name: form form_tool_url_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form
    ADD CONSTRAINT form_tool_url_key UNIQUE (tool_name);


--
-- Name: input_type input_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.input_type
    ADD CONSTRAINT input_type_pkey PRIMARY KEY (id);


--
-- Name: input_validation input_validation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.input_validation
    ADD CONSTRAINT input_validation_pkey PRIMARY KEY (id);


--
-- Name: API url_direction_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."API"
    ADD CONSTRAINT url_direction_name_key UNIQUE (name);


--
-- Name: API url_direction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."API"
    ADD CONSTRAINT url_direction_pkey PRIMARY KEY (id);


--
-- Name: API url_direction_url_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."API"
    ADD CONSTRAINT url_direction_url_key UNIQUE (url);


--
-- Name: user user_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: form form_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form
    ADD CONSTRAINT form_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.client(id);


--
-- Name: form_input form_input_form_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_input
    ADD CONSTRAINT form_input_form_id_fkey FOREIGN KEY (form_id) REFERENCES public.form(id);


--
-- Name: form form_url_direction_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form
    ADD CONSTRAINT form_url_direction_id_fkey FOREIGN KEY ("API_id") REFERENCES public."API"(id);


--
-- PostgreSQL database dump complete
--

