import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const Prisma_ProductScalarFieldEnumSchema = z.enum(['id','name','description','image','price','stock','categoryId','createdAt','updatedAt']);

export const Prisma_CategoryScalarFieldEnumSchema = z.enum(['id','title']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PRISMA PRODUCT SCHEMA
/////////////////////////////////////////

export const prisma_ProductSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullable(),
  image: z.string().nullable(),
  price: z.number().int(),
  stock: z.number().int(),
  categoryId: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type prisma_Product = z.infer<typeof prisma_ProductSchema>

/////////////////////////////////////////
// PRISMA CATEGORY SCHEMA
/////////////////////////////////////////

export const prisma_CategorySchema = z.object({
  id: z.number().int(),
  title: z.string(),
})

export type prisma_Category = z.infer<typeof prisma_CategorySchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PRISMA PRODUCT
//------------------------------------------------------

export const prisma_ProductIncludeSchema: z.ZodType<Prisma.prisma_ProductInclude> = z.object({
  category: z.union([z.boolean(),z.lazy(() => prisma_CategoryArgsSchema)]).optional(),
}).strict()

export const prisma_ProductArgsSchema: z.ZodType<Prisma.prisma_ProductDefaultArgs> = z.object({
  select: z.lazy(() => prisma_ProductSelectSchema).optional(),
  include: z.lazy(() => prisma_ProductIncludeSchema).optional(),
}).strict();

export const prisma_ProductSelectSchema: z.ZodType<Prisma.prisma_ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  image: z.boolean().optional(),
  price: z.boolean().optional(),
  stock: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => prisma_CategoryArgsSchema)]).optional(),
}).strict()

// PRISMA CATEGORY
//------------------------------------------------------

export const prisma_CategoryIncludeSchema: z.ZodType<Prisma.prisma_CategoryInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => prisma_ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Prisma_CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const prisma_CategoryArgsSchema: z.ZodType<Prisma.prisma_CategoryDefaultArgs> = z.object({
  select: z.lazy(() => prisma_CategorySelectSchema).optional(),
  include: z.lazy(() => prisma_CategoryIncludeSchema).optional(),
}).strict();

export const prisma_CategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.prisma_CategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => prisma_CategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const prisma_CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.prisma_CategoryCountOutputTypeSelect> = z.object({
  product: z.boolean().optional(),
}).strict();

export const prisma_CategorySelectSchema: z.ZodType<Prisma.prisma_CategorySelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => prisma_ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Prisma_CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const prisma_ProductWhereInputSchema: z.ZodType<Prisma.prisma_ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => prisma_ProductWhereInputSchema),z.lazy(() => prisma_ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => prisma_ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => prisma_ProductWhereInputSchema),z.lazy(() => prisma_ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  stock: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  category: z.union([ z.lazy(() => Prisma_CategoryRelationFilterSchema),z.lazy(() => prisma_CategoryWhereInputSchema) ]).optional(),
}).strict();

export const prisma_ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.prisma_ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => prisma_CategoryOrderByWithRelationInputSchema).optional()
}).strict();

export const prisma_ProductWhereUniqueInputSchema: z.ZodType<Prisma.prisma_ProductWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => prisma_ProductWhereInputSchema),z.lazy(() => prisma_ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => prisma_ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => prisma_ProductWhereInputSchema),z.lazy(() => prisma_ProductWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  stock: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  category: z.union([ z.lazy(() => Prisma_CategoryRelationFilterSchema),z.lazy(() => prisma_CategoryWhereInputSchema) ]).optional(),
}).strict());

export const prisma_ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.prisma_ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => prisma_ProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => prisma_ProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => prisma_ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => prisma_ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => prisma_ProductSumOrderByAggregateInputSchema).optional()
}).strict();

export const prisma_ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.prisma_ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => prisma_ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => prisma_ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => prisma_ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => prisma_ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => prisma_ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  stock: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const prisma_CategoryWhereInputSchema: z.ZodType<Prisma.prisma_CategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => prisma_CategoryWhereInputSchema),z.lazy(() => prisma_CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => prisma_CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => prisma_CategoryWhereInputSchema),z.lazy(() => prisma_CategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product: z.lazy(() => Prisma_ProductListRelationFilterSchema).optional()
}).strict();

export const prisma_CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.prisma_CategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  product: z.lazy(() => prisma_ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const prisma_CategoryWhereUniqueInputSchema: z.ZodType<Prisma.prisma_CategoryWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => prisma_CategoryWhereInputSchema),z.lazy(() => prisma_CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => prisma_CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => prisma_CategoryWhereInputSchema),z.lazy(() => prisma_CategoryWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product: z.lazy(() => Prisma_ProductListRelationFilterSchema).optional()
}).strict());

export const prisma_CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.prisma_CategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => prisma_CategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => prisma_CategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => prisma_CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => prisma_CategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => prisma_CategorySumOrderByAggregateInputSchema).optional()
}).strict();

export const prisma_CategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.prisma_CategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => prisma_CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => prisma_CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => prisma_CategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => prisma_CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => prisma_CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const prisma_ProductCreateInputSchema: z.ZodType<Prisma.prisma_ProductCreateInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number().int(),
  stock: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  category: z.lazy(() => prisma_CategoryCreateNestedOneWithoutProductInputSchema)
}).strict();

export const prisma_ProductUncheckedCreateInputSchema: z.ZodType<Prisma.prisma_ProductUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number().int(),
  stock: z.number().int(),
  categoryId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const prisma_ProductUpdateInputSchema: z.ZodType<Prisma.prisma_ProductUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => prisma_CategoryUpdateOneRequiredWithoutProductNestedInputSchema).optional()
}).strict();

export const prisma_ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.prisma_ProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const prisma_ProductCreateManyInputSchema: z.ZodType<Prisma.prisma_ProductCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number().int(),
  stock: z.number().int(),
  categoryId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const prisma_ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.prisma_ProductUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const prisma_ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.prisma_ProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const prisma_CategoryCreateInputSchema: z.ZodType<Prisma.prisma_CategoryCreateInput> = z.object({
  title: z.string(),
  product: z.lazy(() => prisma_ProductCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const prisma_CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.prisma_CategoryUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  product: z.lazy(() => prisma_ProductUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const prisma_CategoryUpdateInputSchema: z.ZodType<Prisma.prisma_CategoryUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => prisma_ProductUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const prisma_CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.prisma_CategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => prisma_ProductUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const prisma_CategoryCreateManyInputSchema: z.ZodType<Prisma.prisma_CategoryCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string()
}).strict();

export const prisma_CategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.prisma_CategoryUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const prisma_CategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.prisma_CategoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const Prisma_CategoryRelationFilterSchema: z.ZodType<Prisma.Prisma_CategoryRelationFilter> = z.object({
  is: z.lazy(() => prisma_CategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => prisma_CategoryWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const prisma_ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.prisma_ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const prisma_ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.prisma_ProductAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const prisma_ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.prisma_ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const prisma_ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.prisma_ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const prisma_ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.prisma_ProductSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const Prisma_ProductListRelationFilterSchema: z.ZodType<Prisma.Prisma_ProductListRelationFilter> = z.object({
  every: z.lazy(() => prisma_ProductWhereInputSchema).optional(),
  some: z.lazy(() => prisma_ProductWhereInputSchema).optional(),
  none: z.lazy(() => prisma_ProductWhereInputSchema).optional()
}).strict();

export const prisma_ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.prisma_ProductOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const prisma_CategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.prisma_CategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const prisma_CategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.prisma_CategoryAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const prisma_CategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.prisma_CategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const prisma_CategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.prisma_CategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const prisma_CategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.prisma_CategorySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const prisma_CategoryCreateNestedOneWithoutProductInputSchema: z.ZodType<Prisma.prisma_CategoryCreateNestedOneWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => prisma_CategoryCreateWithoutProductInputSchema),z.lazy(() => prisma_CategoryUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => prisma_CategoryCreateOrConnectWithoutProductInputSchema).optional(),
  connect: z.lazy(() => prisma_CategoryWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const prisma_CategoryUpdateOneRequiredWithoutProductNestedInputSchema: z.ZodType<Prisma.prisma_CategoryUpdateOneRequiredWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => prisma_CategoryCreateWithoutProductInputSchema),z.lazy(() => prisma_CategoryUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => prisma_CategoryCreateOrConnectWithoutProductInputSchema).optional(),
  upsert: z.lazy(() => prisma_CategoryUpsertWithoutProductInputSchema).optional(),
  connect: z.lazy(() => prisma_CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => prisma_CategoryUpdateToOneWithWhereWithoutProductInputSchema),z.lazy(() => prisma_CategoryUpdateWithoutProductInputSchema),z.lazy(() => prisma_CategoryUncheckedUpdateWithoutProductInputSchema) ]).optional(),
}).strict();

export const prisma_ProductCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => prisma_ProductCreateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductCreateWithoutCategoryInputSchema).array(),z.lazy(() => prisma_ProductUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => prisma_ProductCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => prisma_ProductCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => prisma_ProductCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => prisma_ProductWhereUniqueInputSchema),z.lazy(() => prisma_ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const prisma_ProductUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductUncheckedCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => prisma_ProductCreateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductCreateWithoutCategoryInputSchema).array(),z.lazy(() => prisma_ProductUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => prisma_ProductCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => prisma_ProductCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => prisma_ProductCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => prisma_ProductWhereUniqueInputSchema),z.lazy(() => prisma_ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const prisma_ProductUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.prisma_ProductUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => prisma_ProductCreateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductCreateWithoutCategoryInputSchema).array(),z.lazy(() => prisma_ProductUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => prisma_ProductCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => prisma_ProductCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => prisma_ProductUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => prisma_ProductCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => prisma_ProductWhereUniqueInputSchema),z.lazy(() => prisma_ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => prisma_ProductWhereUniqueInputSchema),z.lazy(() => prisma_ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => prisma_ProductWhereUniqueInputSchema),z.lazy(() => prisma_ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => prisma_ProductWhereUniqueInputSchema),z.lazy(() => prisma_ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => prisma_ProductUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => prisma_ProductUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => prisma_ProductScalarWhereInputSchema),z.lazy(() => prisma_ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const prisma_ProductUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.prisma_ProductUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => prisma_ProductCreateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductCreateWithoutCategoryInputSchema).array(),z.lazy(() => prisma_ProductUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => prisma_ProductCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => prisma_ProductCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => prisma_ProductUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => prisma_ProductCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => prisma_ProductWhereUniqueInputSchema),z.lazy(() => prisma_ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => prisma_ProductWhereUniqueInputSchema),z.lazy(() => prisma_ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => prisma_ProductWhereUniqueInputSchema),z.lazy(() => prisma_ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => prisma_ProductWhereUniqueInputSchema),z.lazy(() => prisma_ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => prisma_ProductUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => prisma_ProductUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => prisma_ProductScalarWhereInputSchema),z.lazy(() => prisma_ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const prisma_CategoryCreateWithoutProductInputSchema: z.ZodType<Prisma.prisma_CategoryCreateWithoutProductInput> = z.object({
  title: z.string()
}).strict();

export const prisma_CategoryUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.prisma_CategoryUncheckedCreateWithoutProductInput> = z.object({
  id: z.number().int().optional(),
  title: z.string()
}).strict();

export const prisma_CategoryCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.prisma_CategoryCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => prisma_CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => prisma_CategoryCreateWithoutProductInputSchema),z.lazy(() => prisma_CategoryUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const prisma_CategoryUpsertWithoutProductInputSchema: z.ZodType<Prisma.prisma_CategoryUpsertWithoutProductInput> = z.object({
  update: z.union([ z.lazy(() => prisma_CategoryUpdateWithoutProductInputSchema),z.lazy(() => prisma_CategoryUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => prisma_CategoryCreateWithoutProductInputSchema),z.lazy(() => prisma_CategoryUncheckedCreateWithoutProductInputSchema) ]),
  where: z.lazy(() => prisma_CategoryWhereInputSchema).optional()
}).strict();

export const prisma_CategoryUpdateToOneWithWhereWithoutProductInputSchema: z.ZodType<Prisma.prisma_CategoryUpdateToOneWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => prisma_CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => prisma_CategoryUpdateWithoutProductInputSchema),z.lazy(() => prisma_CategoryUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const prisma_CategoryUpdateWithoutProductInputSchema: z.ZodType<Prisma.prisma_CategoryUpdateWithoutProductInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const prisma_CategoryUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.prisma_CategoryUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const prisma_ProductCreateWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductCreateWithoutCategoryInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number().int(),
  stock: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const prisma_ProductUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductUncheckedCreateWithoutCategoryInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number().int(),
  stock: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const prisma_ProductCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => prisma_ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => prisma_ProductCreateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const prisma_ProductCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.prisma_ProductCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => prisma_ProductCreateManyCategoryInputSchema),z.lazy(() => prisma_ProductCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const prisma_ProductUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => prisma_ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => prisma_ProductUpdateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => prisma_ProductCreateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const prisma_ProductUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => prisma_ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => prisma_ProductUpdateWithoutCategoryInputSchema),z.lazy(() => prisma_ProductUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export const prisma_ProductUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => prisma_ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => prisma_ProductUpdateManyMutationInputSchema),z.lazy(() => prisma_ProductUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export const prisma_ProductScalarWhereInputSchema: z.ZodType<Prisma.prisma_ProductScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => prisma_ProductScalarWhereInputSchema),z.lazy(() => prisma_ProductScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => prisma_ProductScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => prisma_ProductScalarWhereInputSchema),z.lazy(() => prisma_ProductScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  stock: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const prisma_ProductCreateManyCategoryInputSchema: z.ZodType<Prisma.prisma_ProductCreateManyCategoryInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number().int(),
  stock: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const prisma_ProductUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductUpdateWithoutCategoryInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const prisma_ProductUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductUncheckedUpdateWithoutCategoryInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const prisma_ProductUncheckedUpdateManyWithoutCategoryInputSchema: z.ZodType<Prisma.prisma_ProductUncheckedUpdateManyWithoutCategoryInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const prisma_ProductFindFirstArgsSchema: z.ZodType<Prisma.prisma_ProductFindFirstArgs> = z.object({
  select: prisma_ProductSelectSchema.optional(),
  include: prisma_ProductIncludeSchema.optional(),
  where: prisma_ProductWhereInputSchema.optional(),
  orderBy: z.union([ prisma_ProductOrderByWithRelationInputSchema.array(),prisma_ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: prisma_ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Prisma_ProductScalarFieldEnumSchema,Prisma_ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const prisma_ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.prisma_ProductFindFirstOrThrowArgs> = z.object({
  select: prisma_ProductSelectSchema.optional(),
  include: prisma_ProductIncludeSchema.optional(),
  where: prisma_ProductWhereInputSchema.optional(),
  orderBy: z.union([ prisma_ProductOrderByWithRelationInputSchema.array(),prisma_ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: prisma_ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Prisma_ProductScalarFieldEnumSchema,Prisma_ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const prisma_ProductFindManyArgsSchema: z.ZodType<Prisma.prisma_ProductFindManyArgs> = z.object({
  select: prisma_ProductSelectSchema.optional(),
  include: prisma_ProductIncludeSchema.optional(),
  where: prisma_ProductWhereInputSchema.optional(),
  orderBy: z.union([ prisma_ProductOrderByWithRelationInputSchema.array(),prisma_ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: prisma_ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Prisma_ProductScalarFieldEnumSchema,Prisma_ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const prisma_ProductAggregateArgsSchema: z.ZodType<Prisma.prisma_ProductAggregateArgs> = z.object({
  where: prisma_ProductWhereInputSchema.optional(),
  orderBy: z.union([ prisma_ProductOrderByWithRelationInputSchema.array(),prisma_ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: prisma_ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const prisma_ProductGroupByArgsSchema: z.ZodType<Prisma.prisma_ProductGroupByArgs> = z.object({
  where: prisma_ProductWhereInputSchema.optional(),
  orderBy: z.union([ prisma_ProductOrderByWithAggregationInputSchema.array(),prisma_ProductOrderByWithAggregationInputSchema ]).optional(),
  by: Prisma_ProductScalarFieldEnumSchema.array(),
  having: prisma_ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const prisma_ProductFindUniqueArgsSchema: z.ZodType<Prisma.prisma_ProductFindUniqueArgs> = z.object({
  select: prisma_ProductSelectSchema.optional(),
  include: prisma_ProductIncludeSchema.optional(),
  where: prisma_ProductWhereUniqueInputSchema,
}).strict() ;

export const prisma_ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.prisma_ProductFindUniqueOrThrowArgs> = z.object({
  select: prisma_ProductSelectSchema.optional(),
  include: prisma_ProductIncludeSchema.optional(),
  where: prisma_ProductWhereUniqueInputSchema,
}).strict() ;

export const prisma_CategoryFindFirstArgsSchema: z.ZodType<Prisma.prisma_CategoryFindFirstArgs> = z.object({
  select: prisma_CategorySelectSchema.optional(),
  include: prisma_CategoryIncludeSchema.optional(),
  where: prisma_CategoryWhereInputSchema.optional(),
  orderBy: z.union([ prisma_CategoryOrderByWithRelationInputSchema.array(),prisma_CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: prisma_CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Prisma_CategoryScalarFieldEnumSchema,Prisma_CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const prisma_CategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.prisma_CategoryFindFirstOrThrowArgs> = z.object({
  select: prisma_CategorySelectSchema.optional(),
  include: prisma_CategoryIncludeSchema.optional(),
  where: prisma_CategoryWhereInputSchema.optional(),
  orderBy: z.union([ prisma_CategoryOrderByWithRelationInputSchema.array(),prisma_CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: prisma_CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Prisma_CategoryScalarFieldEnumSchema,Prisma_CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const prisma_CategoryFindManyArgsSchema: z.ZodType<Prisma.prisma_CategoryFindManyArgs> = z.object({
  select: prisma_CategorySelectSchema.optional(),
  include: prisma_CategoryIncludeSchema.optional(),
  where: prisma_CategoryWhereInputSchema.optional(),
  orderBy: z.union([ prisma_CategoryOrderByWithRelationInputSchema.array(),prisma_CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: prisma_CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Prisma_CategoryScalarFieldEnumSchema,Prisma_CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const prisma_CategoryAggregateArgsSchema: z.ZodType<Prisma.prisma_CategoryAggregateArgs> = z.object({
  where: prisma_CategoryWhereInputSchema.optional(),
  orderBy: z.union([ prisma_CategoryOrderByWithRelationInputSchema.array(),prisma_CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: prisma_CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const prisma_CategoryGroupByArgsSchema: z.ZodType<Prisma.prisma_CategoryGroupByArgs> = z.object({
  where: prisma_CategoryWhereInputSchema.optional(),
  orderBy: z.union([ prisma_CategoryOrderByWithAggregationInputSchema.array(),prisma_CategoryOrderByWithAggregationInputSchema ]).optional(),
  by: Prisma_CategoryScalarFieldEnumSchema.array(),
  having: prisma_CategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const prisma_CategoryFindUniqueArgsSchema: z.ZodType<Prisma.prisma_CategoryFindUniqueArgs> = z.object({
  select: prisma_CategorySelectSchema.optional(),
  include: prisma_CategoryIncludeSchema.optional(),
  where: prisma_CategoryWhereUniqueInputSchema,
}).strict() ;

export const prisma_CategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.prisma_CategoryFindUniqueOrThrowArgs> = z.object({
  select: prisma_CategorySelectSchema.optional(),
  include: prisma_CategoryIncludeSchema.optional(),
  where: prisma_CategoryWhereUniqueInputSchema,
}).strict() ;

export const prisma_ProductCreateArgsSchema: z.ZodType<Prisma.prisma_ProductCreateArgs> = z.object({
  select: prisma_ProductSelectSchema.optional(),
  include: prisma_ProductIncludeSchema.optional(),
  data: z.union([ prisma_ProductCreateInputSchema,prisma_ProductUncheckedCreateInputSchema ]),
}).strict() ;

export const prisma_ProductUpsertArgsSchema: z.ZodType<Prisma.prisma_ProductUpsertArgs> = z.object({
  select: prisma_ProductSelectSchema.optional(),
  include: prisma_ProductIncludeSchema.optional(),
  where: prisma_ProductWhereUniqueInputSchema,
  create: z.union([ prisma_ProductCreateInputSchema,prisma_ProductUncheckedCreateInputSchema ]),
  update: z.union([ prisma_ProductUpdateInputSchema,prisma_ProductUncheckedUpdateInputSchema ]),
}).strict() ;

export const prisma_ProductCreateManyArgsSchema: z.ZodType<Prisma.prisma_ProductCreateManyArgs> = z.object({
  data: z.union([ prisma_ProductCreateManyInputSchema,prisma_ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const prisma_ProductDeleteArgsSchema: z.ZodType<Prisma.prisma_ProductDeleteArgs> = z.object({
  select: prisma_ProductSelectSchema.optional(),
  include: prisma_ProductIncludeSchema.optional(),
  where: prisma_ProductWhereUniqueInputSchema,
}).strict() ;

export const prisma_ProductUpdateArgsSchema: z.ZodType<Prisma.prisma_ProductUpdateArgs> = z.object({
  select: prisma_ProductSelectSchema.optional(),
  include: prisma_ProductIncludeSchema.optional(),
  data: z.union([ prisma_ProductUpdateInputSchema,prisma_ProductUncheckedUpdateInputSchema ]),
  where: prisma_ProductWhereUniqueInputSchema,
}).strict() ;

export const prisma_ProductUpdateManyArgsSchema: z.ZodType<Prisma.prisma_ProductUpdateManyArgs> = z.object({
  data: z.union([ prisma_ProductUpdateManyMutationInputSchema,prisma_ProductUncheckedUpdateManyInputSchema ]),
  where: prisma_ProductWhereInputSchema.optional(),
}).strict() ;

export const prisma_ProductDeleteManyArgsSchema: z.ZodType<Prisma.prisma_ProductDeleteManyArgs> = z.object({
  where: prisma_ProductWhereInputSchema.optional(),
}).strict() ;

export const prisma_CategoryCreateArgsSchema: z.ZodType<Prisma.prisma_CategoryCreateArgs> = z.object({
  select: prisma_CategorySelectSchema.optional(),
  include: prisma_CategoryIncludeSchema.optional(),
  data: z.union([ prisma_CategoryCreateInputSchema,prisma_CategoryUncheckedCreateInputSchema ]),
}).strict() ;

export const prisma_CategoryUpsertArgsSchema: z.ZodType<Prisma.prisma_CategoryUpsertArgs> = z.object({
  select: prisma_CategorySelectSchema.optional(),
  include: prisma_CategoryIncludeSchema.optional(),
  where: prisma_CategoryWhereUniqueInputSchema,
  create: z.union([ prisma_CategoryCreateInputSchema,prisma_CategoryUncheckedCreateInputSchema ]),
  update: z.union([ prisma_CategoryUpdateInputSchema,prisma_CategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const prisma_CategoryCreateManyArgsSchema: z.ZodType<Prisma.prisma_CategoryCreateManyArgs> = z.object({
  data: z.union([ prisma_CategoryCreateManyInputSchema,prisma_CategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const prisma_CategoryDeleteArgsSchema: z.ZodType<Prisma.prisma_CategoryDeleteArgs> = z.object({
  select: prisma_CategorySelectSchema.optional(),
  include: prisma_CategoryIncludeSchema.optional(),
  where: prisma_CategoryWhereUniqueInputSchema,
}).strict() ;

export const prisma_CategoryUpdateArgsSchema: z.ZodType<Prisma.prisma_CategoryUpdateArgs> = z.object({
  select: prisma_CategorySelectSchema.optional(),
  include: prisma_CategoryIncludeSchema.optional(),
  data: z.union([ prisma_CategoryUpdateInputSchema,prisma_CategoryUncheckedUpdateInputSchema ]),
  where: prisma_CategoryWhereUniqueInputSchema,
}).strict() ;

export const prisma_CategoryUpdateManyArgsSchema: z.ZodType<Prisma.prisma_CategoryUpdateManyArgs> = z.object({
  data: z.union([ prisma_CategoryUpdateManyMutationInputSchema,prisma_CategoryUncheckedUpdateManyInputSchema ]),
  where: prisma_CategoryWhereInputSchema.optional(),
}).strict() ;

export const prisma_CategoryDeleteManyArgsSchema: z.ZodType<Prisma.prisma_CategoryDeleteManyArgs> = z.object({
  where: prisma_CategoryWhereInputSchema.optional(),
}).strict() ;