import { nextTick, ref } from "vue";
import { useAppForm } from "@spacelablms/components";

import { DetailedErrorMessageItem } from "@/shared";
import { editContactSchema, SchemaEditContactType } from "@/features";

export function useValidEditContactForm() {
	const serverErrorMessages = ref<string[]>([]);

	const schema = editContactSchema();
	const form = useAppForm<SchemaEditContactType>({
		validationSchema: schema,
		initialValues: schema.getDefault(),
	});

	const { values, setFieldValue, resetForm } = form;

	async function setValuesFromObject(data: object) {
		resetForm();

		await nextTick();
		await nextTick();

		Object.entries(data).forEach(([key, value]) => {
			setFieldValue(key as keyof SchemaEditContactType, value);
		});
	}

	function errorsForm(errors: DetailedErrorMessageItem[]) {
		errors.forEach(({ field, message }) => {
			const formField = field.replace(
				/Id/g,
				"fg",
			) as keyof SchemaEditContactType;
			form.setFieldError(formField, message);
		});
	}

	return {
		values,
		instance: form,
		serverErrorMessages,
		setValuesFromObject,
		errorsForm,
	};
}
